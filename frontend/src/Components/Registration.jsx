import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import PopupDialog from '../Components/PopupDialog'
import './Registration.module.css'

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPopup, setShowPopup] = useState(false);


  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);
  const handleUserName = (event) => setUserName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, confirmPassword });
    if(password != confirmPassword) alert("Passwords do not match");
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
            placeholder="eg - Alen"
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
