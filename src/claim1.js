import React, { useState } from "react";
import "./claim1.css";
import "./dashboard";  
import "./claim";       
import {Link} from 'react-router-dom';

const Register = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email);
  }

  return (
    <center><div className="wrap9">
      
    <div className='container9'>
    <div class="box box817">
      <>
        <div class="phone"><h1 id='header'>Claim Your <br></br>Insurance</h1></div>
        <br></br>
        <br></br>

        <form id='loginform'>
        
          <input type='text' value={name} onChange={(e)=>setEmail(e.target.value)}placeholder='USERNAME' id='email' name='email'/>
          <br></br>
          <br></br>
          
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='EMAIL' id='email' name='email'/>
          <br></br>
          <br></br>
          
          

          <input type='number' onChange={(e)=>setPass(e.target.value)} placeholder='POLICY ID' id='mobile' name='mobile'/>
          <br></br>
          <br></br>
          <input type='number' onChange={(e)=>setPass(e.target.value)} placeholder='VEHICLE REG NO' id='mobile' name='mobile'/>
          <br></br>
          <br></br>
          <input type='number' onChange={(e)=>setPass(e.target.value)} placeholder='PASSWORD' id='mobile' name='mobile'/>
          <br></br>
          <br></br>
          <Link to="/claim"><button id='loginbtn' type='submit'>CLAIM</button></Link>
        </form>
      </>
    </div>
    </div></div></center>

  )
}

export default Register