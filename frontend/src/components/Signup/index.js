import {React, useState} from "react";
import img from '../../images/logo.svg';
import { Container,FormWrap, FormContent, Form, FormH1,FormLabel,FormInput, FormButton, Text,Logo, Icon} from './SignupElements';
import { useHistory } from "react-router-dom";


const SignUp = () => {
    const [user, setUser] = useState({
        name:"", email:"", password:"",confirmPassword:"" 
    })
    const history = useHistory();
 
    let name, value;
    const handleInputs=(e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }
    const PostData = async (e) =>{
            e.preventDefault();
            const {name, email, password,confirmPassword} = user;
            const res = await fetch("http://127.0.0.1:5555/api/v1/users/signup",{
            method:"POST",
            withCredentials: true,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, password,confirmPassword
            })
        });
        const data = await res.json();
        console.log(data);
        if(data.status === "error"){
            window.alert("Sign up failed. Please check your details.");

            
        }
        else{
            window.alert("Sign Up successful. Please login to continue.");
            history.push("/login");
        }
    }
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'><Logo src={img} alt="icon"/></Icon>
                <FormContent>
                    <Form method="POST">
                        <FormH1>Create New Account</FormH1>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='text' name="name" required value={user.name} onChange={handleInputs}/>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' name="email" required value={user.email} onChange={handleInputs}/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' name="password" required value={user.password} onChange={handleInputs}/>
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                        <FormInput type='password' name="confirmPassword" required value={user.confirmPassword} onChange={handleInputs}/>
                        <FormButton type='submit' onClick={PostData}>Sign Up</FormButton>
                        <Text to="/login">Already Have An Account. Please Login!</Text>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignUp