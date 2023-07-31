import React,{useState} from 'react'
import './Login.css';
import './createac';
import './dashboard';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";
import {Link,useNavigate} from 'react-router-dom';
function Login() {
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        dispatch(
            login(
                {
                    name:username
                }
            )
        )



        //  const formdata={
        //      name:username,
        //      email:email,
        //     password:password,
        //  };
        try{
            const response =await axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',{
                "name":username,
                "email":email,
                "password":password
            })
            .then((response)=>{
                console.log(response.data);
                localStorage.setItem('token',response.data.token);
                console.log(localStorage.getItem('token'));
            })
            alert("Login successful");
            navigate("/dashboard");
        }
        catch(error){
            alert("Invalid email and password");
        }
    }
  return (
    <body>
   <header class="header">
   </header>
    <div class="background"></div>
    <div class="container">
        <div class="item">
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form onSubmit={handleSubmit}action="">
                    <h2>LOGIN</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Name' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'required/>
                    </div>
                    <div class="remember-password">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                        <a href="#">Forget Password</a>
                    </div>
                   <button type="submit"class="btn">Log In</button>
                    
                    <div class="create-account">
                        <p>Don't have an Account?<Link to="/createac"><a class="register-link">Sign Up</a></Link></p>
                    </div>
                </form>
            </div>
            
                   
               
            </div>
        </div>
    
</body>
    
  )
}

export default Login