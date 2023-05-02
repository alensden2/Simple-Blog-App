import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import PopupDialog from "../Components/PopupDialog";
import "./Registration.module.css";
import Axios from "axios";
import { Navigate } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);
  const handleUserName = (event) => setUserName(event.target.value);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, confirmPassword });
    if ((password == confirmPassword) && (userName.length>=3) && (userName.length != 0) && emailRegex.test(email) && password.length>=6) {
      Axios.post("http://localhost:8080/api/user/register", {
        name: userName,
        email: email,
        password: password,
      })
        .then((res) => {
          
          setMessage(res.data);
          if(res.status ==200) alert("User registered, Please Login!")
          return <Navigate to="/login" />;
          console.log(message);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if(password != confirmPassword){
        alert("Passwords dont match")
    }
    else if(userName.length ==0 || userName.length<3){
        alert("User name has to be greater than 3")
    }
    else if(!emailRegex.test(email)){
        alert("Email is not valid")
    }
    else if( password.length < 6){
        alert("Passwords have to atleast be of 6 characters")
    }
     else {
      alert("Please re-check form");
    }
    
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div class="form-container">
      <h1>Registration</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="eg - Alen John"
            value={userName}
            onChange={handleUserName}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="eg - alen@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </Form.Group>

        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>
      <PopupDialog show={showPopup} handleClose={handleClosePopup} />
    </div>
  );
};

export default Registration;
