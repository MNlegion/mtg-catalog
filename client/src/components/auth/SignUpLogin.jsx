// src/components/auth/SignUpLogin.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SignUpLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    axios
      .post('http://localhost:3001/auth/register', formData) // Replace with your backend API endpoint
      .then((response) => {
        // Handle successful registration
        console.log('Registration successful:', response.data);
        // Optionally, you can redirect the user to a login page or display a success message.
      })
      .catch((error) => {
        // Handle registration error
        console.error('Registration error:', error);
        // Optionally, you can display an error message to the user.
      });
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login data:', formData);
  };

  return (
    <div>
      <h2>Sign Up or Log In</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default SignUpLogin;
