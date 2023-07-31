import React, { useState } from 'react';
import './createac.css';
import './Login';
import './dashboard';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateAccount() {
  const [formData, setFormData] = useState({
    
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/auth/register', formData)
      .then((response) => {
        // Handle successful registration here, e.g., show success message or redirect to dashboard
        console.log('Registration successful:', response.data);
      })
      .catch((error) => {
        // Handle registration error here, e.g., show error message
        console.error('Registration error:', error);
      });
  };

  return (
    <div>
      <header className="header"></header>
      <div className="background"></div>
      <div className="container">
        <div className="item"></div>
        <div className="login-section">
          <div className="form-box login">
            <form onSubmit={handleSubmit}>
              <center>
                <h3>REGISTER</h3>
              </center>
                            <div className="input-box">
                <span className="icon">
                  <i className='bx bxs-envelope'></i>
                </span>
                <input
                  type="text"
                  placeholder='Name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className='bx bxs-envelope'></i>
                </span>
                <input
                  type="text"
                  placeholder='Email'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className='bx bxs-envelope'></i>
                </span>
                <input
                  type="password"
                  placeholder='Password'
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn">Sign Up</button>
              <div className="create-account">
                <Link to="/Login">
                  <a className="register-link">Login Here</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;