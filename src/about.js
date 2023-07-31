import React from 'react'
import './about.css';
import {Link} from 'react-router-dom';
function about() {
  return (
    <div>
      <div class="para">
        <br></br>
        <br></br>
        <br></br>
       <center><h1>Safewheels</h1>
       <p>Your Security Our Priority</p></center>
       <br></br>
       
       <center>
       <ol type="1">
      <li>Instant policy renewal</li>
      <li>Pay as you drive(new)</li>
      <li>Medical Payment</li>
      <li>Personal injury protection</li>
      <li>Cheap plans</li>
      <li>Uninsured and Underinsured Motorist Coverage</li>
   </ol></center>
   <br></br>
   <br></br>
   <div class="lo">
   <p> Copyright 2023, Insurance Information Institute, Inc.<br></br>
All Rights Reserved.</p></div>
<div class="mine012">
      <Link to="/">
      <button>Back</button>
      </Link></div>
       
      </div>
    </div>
  )
}

export default about
