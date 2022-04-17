import * as React from "react";
import { useState } from "react";
import './directcode.css';
import AceEditor from "react-ace";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import img1 from "../images/logo.svg";
import Grid from '@mui/material/Grid';


import { makeStyles } from "@mui/styles";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-perl";

let userOutput;


const DirectCodePagePerl = () => {
    const useStyles = makeStyles({
        body: {
            width:'70%',
            "& .ace_editor": {
                backgroundColor: '#F1FAEE'
            },
            "& .ace_gutter": {
              background: '#bababa',
              color: '#1D3557'
            },
        },
        editor: {
            width: "100% !important",
            borderTop: "",
            borderRight:"2px solid #1D3557", 
            "& *": {
                fontFamily: "monospace"
            },
        },
        allInputs: {
            backgroundColor: '#F1FAEE',
            border: "none",
            overflow: "auto",
            outline: "none",
            resize: "none",
            width: "100%",
            height: "100%",
            color: "#1D3557",
            fontSize: "1.05em",
            padding: "20px",
            borderTop: "",
          },
          allInputs1: {
            backgroundColor: '#F1FAEE',
            border: "none",
            overflow: "auto",
            outline: "none",
            resize: "none",
            width: "100%",
            height: "100%",
            color: '#1D3557',
            fontSize: "1.05em",
            padding: "20px",
            borderTop: "2px solid #1D3557",
            borderRight: "2px solid #1D3557",
            borderBottom: "2px solid #1D3557",
            
          },
          allInputs2: {
            backgroundColor: '#F1FAEE',
            border: "none",
            overflow: "auto",
            outline: "none",
            resize: "none",
            width: "100%",
            height: "100%",
            color: '#1D3557',
            fontSize: "1.05em",
            padding: "20px",
            borderTop: "2px solid #1D3557",
            borderBottom: "2px solid #1D3557",
          }
    })
  const classes = useStyles()
      
    const [script, setScript] = useState("use strict;\nuse warnings;\nprint(\"Hello World\");")
    const [language, setLangauge] = useState('perl')
    const [stdin, setStdin] = useState('')
    const [lang, setLang] = useState('perl')
    const [output, setOutput] = useState("")
    const [loading, setLoading] = useState(false);
  
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
        </Toolbar>
    </Container>
    </AppBar>
    <Grid container>
        <Grid item xs={8} className={classes.body} >
            <AceEditor
                style={{height:"100%",minHeight:'67.5vh'}}
                mode={lang}
                fontSize={18}
                theme="textmate" 
                value={script}
                onChange={(e) => {
                    setScript(e);
                  }}                        
                  setOptions={{
                    showPrintMargin: false,
                    enableSnippets: true,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
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

export default DirectCodePagePerl