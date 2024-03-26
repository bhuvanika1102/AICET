import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom'; // Import Link
import './Login.css';

function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace this with your actual login logic
      // ...

      // Redirect to the assessment page if login is successful
      window.location.href = '/assessment'; // Use window.location.href to navigate
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h2>LOGIN FORM</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
        </div>
        <div>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <br />
        <Link to="/register" className="ms-2">
          <h5>Don't have an account? Sign up here</h5>
        </Link>
      </form>
    </div>
  );
}

export default Login;
