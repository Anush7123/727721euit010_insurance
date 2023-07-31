import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dash.css';
import './Login';
import './home';
import './accman';
import './claim';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./redux/userSlice";
import { Link } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState({});
  // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint from which you want to fetch data
  const API_ENDPOINT = 'YOUR_API_ENDPOINT';

  useEffect(() => {
    // Fetch data using axios
    axios.get(API_ENDPOINT)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [API_ENDPOINT]);
  const user= useSelector(selectUser);
	const dispatch = useDispatch();
	const handleLogout = (e) => {
	  e.preventDefault();
	  dispatch(logout());
	};

  return (
    <div>
      <div>
        <header>
    
            <div class="logosec">
                <div class="logo">Welcome {user.name}</div>
      
            </div>
            <div class="message">
            <Link to="/profile"><img src=
    "https://cdn-icons-png.flaticon.com/512/6915/6915987.png"
                    class="icn"
                    alt=""></img></Link>
            </div>
        </header>
        <div class="main-container">
            <div class="navcontainer">
                <nav class="nav">
                    <div class="nav-upper-options">
                        <div class="nav-option option1">
                            
                            <h3>SAFEWHEELS</h3>
                        </div>
                        <Link to="/postdetails"><div class="nav-option option5">
                            <h3>Profile Details</h3></div></Link>
                        <Link to="/policy"><div class="nav-option option5">
                            <h3> About Policy </h3>
                        </div></Link>
                        <Link to="/policycomp"><div class="nav-option option5">
                            <h3> Policies</h3>
                        </div></Link>
                        <Link to="/claim1"><div class="nav-option option4">
                            <h3> Claims Your Policy</h3>
                        </div></Link>
                        <Link to="/renewal"><div class="nav-option logout">
                            <h3>Renewal Your Policy</h3>
                        </div></Link>
                        <Link to="/accman"><div class="nav-option option6">
                            <h3>Account Management</h3>
                            </div></Link>
                            <Link to="/"> <div class="nav-option logout">
                            <h3>Logout</h3>
                        </div></Link>
                        </div>
                </nav>
            </div>
            <div class="main">
    
                <div class="searchbar2">
                    <input type="text"
                        name=""
                        id=""
                        placeholder="Search"></input>
                    <div class="searchbtn">
                    <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                            class="icn srchicn"
                            alt="search-button"></img>
                    </div>
                </div>
                <div class="report-body">
                    <div class="box-container">
                    <div class="box box1">
                        <div class="text">
                        <h6 class="topic-heading">2.74k customers</h6>
                            <h2 class="topic">Over 2.74 K customer trust us and have brought their insurance on safewheels </h2>
                        </div>
                    </div>
    
                    <div class="box box2">
                        <div class="text">
                       <br></br>
                        <h2 class="topic-heading">7+ insurers </h2>
                            <h2 class="topic">Partnered with us so that you can compare easily and transparently</h2>
                        </div>
                    </div>
    
                    <div class="box box3">
                        <div class="text">
                        <br></br>
                   <h2 class="topic-heading">4.42+ Policies Sold</h2>
                            <h2 class="topic">Great prices for all kind of insurance plan is available online</h2>
                        </div>
                    </div>
                    <div class="box box4">
                        <div class="text">
                        <br></br>
                        <h2 class="topic-heading">Claims</h2>
                            <h2 class="topic">Support built in with every policy for help, when you need it the most</h2>
                        </div>
                        </div>
                        <div class="report-header">
                        
                     <center><p>We are one of India's largest digital insurance marketplace</p></center>
                    </div>
                        
                    
                </div>
                
    
                        </div>
                    </div>
                </div>
            </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default Dashboard;