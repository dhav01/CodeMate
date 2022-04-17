import * as React from "react";
import { useState } from "react";
import './code.css';
import AceEditor from "react-ace";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../contexts/authContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import img1 from "../images/logo.svg";
import Grid from '@mui/material/Grid';


import { makeStyles } from "@mui/styles";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate"
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-perl";

import downloadFileUtil from "../controllers/download";
import { useEffect } from "react";

let userOutput;
const settings = ['My Profile', 'Dashboard', 'Logout'];


const CodePage = ({ userName }) => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const useStyles = checked =>
    makeStyles(theme=>({
    body: {
        width:'70%',
        "& .ace_editor": {
            backgroundColor: checked ? '#1D3557' : '#F1FAEE'
        },
        "& .ace_gutter": {
          background: checked ? '#002b36' : '#bababa',
          color: checked ? "#F1FAEE" : '#1D3557'
        },
    },
    editor: {
        width: "100% !important",
        borderTop: checked ? "2px solid #F1FAEE" : "",
        borderRight: checked ? "2px solid #F1FAEE" : "2px solid #1D3557", 
        "& *": {
            fontFamily: "monospace"
        },
    },
    allInputs: {
        backgroundColor: checked ? '#1D3557' : '#F1FAEE',
        border: "none",
        overflow: "auto",
        outline: "none",
        resize: "none",
        width: "100%",
        height: "100%",
        color: checked ? "#F1FAEE" : "#1D3557",
        fontSize: "1.05em",
        padding: "20px",
        borderTop: checked ? "2px solid #F1FAEE" : "",
      },
      allInputs1: {
        backgroundColor: checked ? '#1D3557' : '#F1FAEE',
        border: "none",
        overflow: "auto",
        outline: "none",
        resize: "none",
        width: "100%",
        height: "100%",
        color: checked ? '#F1FAEE' : '#1D3557',
        fontSize: "1.05em",
        padding: "20px",
        borderTop: checked ? "2px solid #F1FAEE" : "2px solid #1D3557",
        borderRight: checked ? "2px solid #F1FAEE" : "2px solid #1D3557",
        borderBottom: checked ? "" : "2px solid #1D3557",
        
      },
      allInputs2: {
        backgroundColor: checked ? '#1D3557' : '#F1FAEE',
        border: "none",
        overflow: "auto",
        outline: "none",
        resize: "none",
        width: "100%",
        height: "100%",
        color: checked ? '#F1FAEE' : '#1D3557',
        fontSize: "1.05em",
        padding: "20px",
        borderTop: checked ? "2px solid #F1FAEE" : "2px solid #1D3557",
        borderBottom: checked ? "" : "2px solid #1D3557",
      }
  }));

  const getMode = () =>{
      return JSON.parse(localStorage.getItem("mode")) || false
  }  
  const getDesign = () =>{
    return JSON.parse(localStorage.getItem("design")) || "textmate"
} 

  const [script, setScript] = useState('#include <stdio.h>\nint main(){\n\tprintf("Hello World");\n}')
  const [language, setLangauge] = useState('c')
  const [stdin, setStdin] = useState('')
  const [lang, setLang] = useState('c_cpp')
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(getDesign());
  const [checked, setChecked] = useState(getMode());

  const classes = useStyles(checked)();


userOutput=output.replace(/^["'](.+(?=["']$))["']$/, '$1');
userOutput=userOutput.replaceAll('\\n', '\n');


React.useEffect(() => {
    if (language !== "") {
        let langArray = {
            c: "c_cpp",
            cpp: "c_cpp",
            java: "java",
            python3: "python",
            ruby: "ruby",
            perl: "perl"
        };
        setLang(langArray[language]);
    }
  }, [language]);

  React.useEffect(() => {
    if (language !== "") {
        let scriptArray = {
            c: "#include <stdio.h>\nint main(){\n\tprintf(\"Hello World\");\n}",
            cpp: "#include <iostream>\nusing namespace std;\nint main(){\n\tcout<<\"Hello World\";\n}",
            java: "public class MyClass{\n\tpublic static void main(String args[]) {\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}",
            python3: "print(\"Hello World\");",
            ruby: "puts \"Hello World\"",
            perl: "use strict;\nuse warnings;\nprint(\"Hello World\");"
        };
        setScript(scriptArray[language]);
    }
  }, [language]);

  useEffect(()=>{
    localStorage.setItem("mode",JSON.stringify(checked))
  },[checked])
  useEffect(()=>{
    localStorage.setItem("design",JSON.stringify(theme))
  },[theme])


  React.useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
      "Are you sure you want to leave? All provided data will be lost.";
    e.returnValue = message;
    return message;
  };



    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:5555/api/v1/code/run",{
            method:"POST",
            withCredentials: true,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                script, language, stdin
            })
        });
        fetchData();
        const data = await res.json();
        console.log(data);
        if(data.status === "success"){
            setOutput(data.data.output)        
        }
        // else{
            
        // }
    }
    const fetchData = () =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 700)
    }

    const handleChecked = () =>{
        setChecked(!checked);
        if(theme==="textmate"){
            setTheme("monokai");
        }
        else{
            setTheme("textmate");
        }
    }


    const handleLogout = async (e) =>{
        e.preventDefault();
        await fetch("http://127.0.0.1:5555/api/v1/users/logout",{
            method:"POST",
            withCredentials: true,
            headers:{
                "Content-Type":"application/json"
            },
        });
        ctx.logout()

    }


  let str = userName;
  let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')

  const ctx = React.useContext(AuthContext);



  return (
    <>
            <AppBar position="static" style={{backgroundColor:"#1D3557" , color:"#F1FAEE"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{display:'flex', justifyContent:'space-between'}}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    <img src={img1} alt="icon"/>
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    <img src={img1} alt="icon"/>
                </Typography>
                <select 
                value={language}
                onChange={(e) => {
                  setLangauge(e.target.value);
                }}
                >
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="java">JAVA</option>
                        <option value="python3">Python</option>
                        <option value="ruby">Ruby</option>
                        <option value="perl">Perl</option>

                </select>
                
                <Button size="large" 
                variant="contained" 
                endIcon={<PlayArrowIcon />} 
                onClick={handleSubmit}
                >
                    Run
                </Button>
                {loading?   
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open
                        
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>:""
                }
                <Button size="large" variant="contained" endIcon={<DownloadIcon />}
                    onClick={() =>
                        downloadFileUtil(script, language)
                    }
                >
                    Download
                </Button>
                <label className="switch">
                    <input type="checkbox"
                        checked={checked}
                        onClick={handleChecked}
                    />
                    <span className="slider round"></span>
                </label>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar style={{backgroundColor:"#1976D2", color:"#F1FAEE", fontFamily:"Raleway", fontWeight:"800"}}>{acronym}</Avatar>
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                        <MenuItem key={settings[0]}>
                        <Typography textAlign="center">{settings[0]}</Typography>
                        </MenuItem>
                        <MenuItem key={settings[1]}>
                        <Typography textAlign="center">{settings[1]}</Typography>
                        </MenuItem>
                        <MenuItem key={settings[2]} onClick={handleLogout}>
                        <Typography textAlign="center">{settings[2]}</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
            <Grid container>
                <Grid item xs={8} className={classes.body} >
                    <AceEditor
                        style={{height:"100%",minHeight:'67.5vh'}}
                        mode={lang}
                        fontSize={18}
                        theme={theme}                 
                        value={script}
                        onChange={(e) => {
                            setScript(e);
                          }}                        
                          setOptions={{
                            showPrintMargin: false
                        }}
                        name="UNIQUE_ID_OF_DIV"
                        className={classes.editor}
                    />
                </Grid>
                <Grid item xs={4}>
                    <textarea
                        id="outlined-multiline-static"
                        multiline
                        className={classes.allInputs}
                        rows={18}
                        placeholder="Notes"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                        <textarea
                        id="outlined-multiline-static"
                        multiline
                        value={stdin}
                        className={classes.allInputs1}
                        onChange={(e) => {
                            setStdin(e.target.value);
                          }}
                        rows={5}
                        placeholder="Input"
                        variant="outlined"
                    />

                </Grid>
                <Grid item xs={6}>
                        <textarea
                            id="outlined-multiline-static"
                            multiline
                            className={classes.allInputs2}
                            rows={5}
                            placeholder="Output"
                            variant="outlined"
                            value={userOutput}
                        />        
                </Grid>
            </Grid>
    </>
  )
}

export default CodePage