import React from "react";
import { useState} from "react";
import AuthContext from "../../contexts/authContext";
import img from '../../images/logo.svg';
import { Container,FormWrap, FormContent, Form, FormH1,FormLabel,FormInput, FormButton, Text,Logo, Icon} from './LoginElements';
import { useHistory } from "react-router-dom";

const LogIn = () => {
    const [userName, setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authCtx = React.useContext(AuthContext);
    const history = useHistory();


    const handleSubmit = async (e) =>{
            e.preventDefault();
            const res = await fetch("http://127.0.0.1:5555/api/v1/users/login",{
            method:"POST",
            withCredentials: true,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if(data.status === "error"){
            window.alert("Login in failed. Please check your details.");
        }
        else{
            
            authCtx.setUser({ userName: userName });
            console.log("Login Successful");
            history.push("/codepage");
        }
    }
    // const handleSubmit = () => {
    //     authCtx.setUser({ userName: userName });
    //     history.push("/userhome");
    // };


  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'><Logo src={img} alt="icon"/></Icon>
                <FormContent>
                    <Form method="POST" >
                        <FormH1>Welcome Back</FormH1>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput 
                            type='text' 
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            required
                        />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' 
                        value={email} 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required 
                        />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password'  
                        value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                        />
                        <FormButton type='submit' onClick={handleSubmit}>Log In</FormButton>
                        <Text to="/signup">New To CodeMate. Please Register!</Text>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default LogIn;