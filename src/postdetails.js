import React, { useState } from 'react';
import './postdetails.css';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function ProfileUpdate() {
  
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [vehicle_no, setvehicle_no] = useState('');
  const [mobile, setmobile] = useState('');
  const [password, setpassword] = useState('');
  const [notification, setnotification] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const handleSubmit=async(e)=>{
    e.preventDefault();

    const formData={
   
      name:name,
      email:email,
      vehicle_no:vehicle_no,
      mobile:mobile,
      password:password,
    };
    const token=localStorage.getItem('token');
    if(!token){
      console.error('No JWT token found.');
      return;
    }
    try{
      const response=await axios.post('http://127.0.0.1:8080/post',formData,{
        headers:{
          Authorization:`Bearer ${token}`,
        }
  });
console.log(response.data);

setname('');
setemail('');
setvehicle_no('');
setmobile('');
setpassword('');
    }
    catch(error)
    {
      console.error(error);
    }
  };

  return (
    <div>
      <header className="header">
      </header>
      <div className="background"></div>
      <div className="container">
        <div className="item">
        </div>
        <div className="login-section">
          <div className="form-box login">
            <form onSubmit={handleSubmit}>
              <h2>Enter Your Details</h2>
              
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)} required />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="text" name="email" placeholder='Email ID' value={email} onChange={(e)=>setemail(e.target.value)} required />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="text" name="vehicle_no" placeholder='Vehicle number' value={vehicle_no} onChange={(e)=>setvehicle_no(e.target.value)} required />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input type="text" name="mobile" placeholder='Mobile' value={mobile} onChange={(e)=>setmobile(e.target.value)} required />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} required />
              </div>

              <button type="submit" className="btn">Done</button>
            </form>
          </div>
        </div>
      </div>
      </div>
  );
}

export default ProfileUpdate;