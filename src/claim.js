import React from 'react'
import './claim.css';
import './dashboard';
import {Link} from 'react-router-dom';
function claim() {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div class="valid">
        <center><p>Your claim will be processes after verification and validation.</p></center>
      </div>
      <div class="mine01">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  )
}

export default claim
