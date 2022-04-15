import React, { useState } from "react";
import axios from "axios"
import "./ForgotPass.css"



export default function ForgotPass() {


  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async() => {

    try {
      const response = await axios.post("/user/forgotpass", {email})
      console.log('Response is', response);

      if(response.data.succes){
        setMessage("We sent  you an email to recover your password. Please check your email box")

      } else {
        setMessage("There was a problem recovering your password")

      }
      
    } catch (error) {
      console.log("Error",error.message);
      setMessage("There was a problem recovering your password")
      
    }

  }

  return (
    <div className="password-container">
      <p>Please type your email to help recover your password</p>
      <input
        placeholder="Type your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Send</button>
      <p>{message}</p>
      
    </div>
  );
}
