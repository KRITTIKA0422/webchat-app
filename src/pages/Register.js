//import React , {useState,useEffect} from "react";
import "./Register.css";
import {Link} from "react-router-dom";
import { useFormik } from 'formik';
import { registerRoute } from "../utils/APIRoutes";


export default function Register() {
    const validate = values => {
        const errors = {};
        if (!values.username) 
        errors.username = 'Field is Required';
        if (!values.email) 
          errors.email = 'Field is Required';
          if (!values.password) 
          errors.password = 'Field is Required';
          if (!values.confirmPassword) 
          errors.confirmPassword = 'Field is Required';
        if(values.password!==values.confirmPassword){
            errors.confirmPassword = 'Confirm password should be same as password';
          }else if(values.password.length<4){
            errors.password = "Password should be equal or greater than 4 characters";
          }
          return errors;
      };
     const formik=useFormik({ 
        initialValues:{ username:"",
        email:"",
        password:"",
        confirmPassword:""},
        validate,
        onSubmit: (registerDetails)=>{
            console.log("onSubmit",registerDetails);
        alert(JSON.stringify(registerDetails, null, 2));
        
        fetch(registerRoute,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(registerDetails),
        }).then((data)=>data.json());
    }
          });
  
   return ( 
        <div>
     <div className="FormContainer">
    <form onSubmit={formik.handleSubmit}>
           <div className="brand">
            <img src="https://www.pintarmewarnai.com/png/thumb/u2UWHiz23fPmbtN-Chat-Logo-PNG-Free-Download.png" alt="Logo"/>
            <h1>webchat app</h1>
           </div>
           <input type="text" placeholder="Username" name="username" onChange={formik.handleChange} value={formik.values.username}/>
           {formik.touched.username && formik.errors.username ? (
         <div>{formik.errors.username}</div>
       ) : null}
           <input type="email" placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
           {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
           <input type="password" placeholder="Password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
           {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
           <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword}/>
           {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div>{formik.errors.confirmPassword}</div>
       ) : null}
           <button type="submit">Create User</button>
           <span>Already have an account?<Link to="/login">Login</Link></span>
    </form>
     </div>
     </div>
  );
  }
