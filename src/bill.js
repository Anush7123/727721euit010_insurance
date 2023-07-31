import React from 'react'
import "./bill.css";
import bill from "./bill.jpg";
import {Link} from 'react-router-dom';
function Bill() {
  return (
    <div>
      <br></br>
      <br></br>

      <center><div class="one">
        <h1>Hey Customer,</h1>
<p>This is the receipt for a payment of RS:***** you made to Safewheels.</p>
<br></br>
<img src={bill} className="pic2" />
      </div></center>
      <div class="mine18">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  )
}

export default Bill
