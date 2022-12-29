import React from "react";
import "./Register.css";

export default function Register() {

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("form");
    };
    return (
        <div>
     <div className="FormContainer">
    <form onSubmit={(event)=>handleSubmit(event)}>
           <div className="brand">
            <img src="" alt=""/>
           </div>
    </form>
     </div>
     </div>
  );
  }
