import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password });
    if (emailRegex.test(email) && password.length >= 6) {
      Axios.post("http://localhost:8080/api/user/login", {
        email: email,
        password: password,
      })
        .then((res) => {
          if (res.status == 200) {
            alert("Login Success!");
            const token = res.data.token;
            console.log(token)
          }
        //   console.log(res);
        })
        .catch((error) => {
          console.log(error);
          alert("Invalid User")
        });
    } else if (!emailRegex.test(email)) {
      alert("Email is not valid");
    } else if (password.length < 6) {
      alert("Passwords have to atleast be of 6 characters");
    } else {
      alert("Please re-check form");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="eg - alen@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Login;
