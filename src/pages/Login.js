import React, { useState } from "react";
import { useFormik } from 'formik';
import {Link} from "react-router-dom";
import { loginRoute } from "../utils/APIRoutes";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

export default function Login(){
    const [submitbtn,setSubmitbtn]=useState("SUBMIT");
    const navigate = useNavigate();
    const formik=useFormik({ 
        initialValues:{username:"",
        email:"",
        password:"",
        confirmPassword:""},
        onSubmit:(userDetails)=>{
            console.log("onSubmit",userDetails);
           

            fetch(loginRoute,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(userDetails),
            }).then((data)=> {
                if(data.status===401){
                    throw new Error('Invalid user');
                } else{
                    return data.json();
                }
            }).then(data=>{
                console.log(data.token);
                localStorage.setItem("token",data.token);
                navigate('/chat');
            }).catch(err=>{
                console.log(err);
                setSubmitbtn('INVALID CREDENTIALS');
            });
        },
    });
   
    return(
        <div>
        <div className="FormContainer">
       <form onSubmit={formik.handleSubmit}>
              <div className="brand">
               <img src="https://www.pintarmewarnai.com/png/thumb/u2UWHiz23fPmbtN-Chat-Logo-PNG-Free-Download.png" alt="Logo"/>
               <h1>webchat app</h1>
              </div>
              <input type="text" placeholder="Username" name="username" onChange={formik.handleChange} value={formik.values.username}/>
              <input type="email" placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
              <input type="password" placeholder="Password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
              <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword}/>
              <button type="submit">{submitbtn}</button>
              <span>Do not have an account?<Link to="/register">Register</Link></span>
       </form>
        </div>
        </div>
    );
}