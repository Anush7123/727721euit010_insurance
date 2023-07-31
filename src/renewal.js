import React from 'react'
import './renewal.css';
import './policy';
import {Link} from 'react-router-dom';
function renewal() {
  return (
   <div className="topp"> <div>
        <center><div class="head">
       <h1>Select from the below listed options:</h1></div></center>
       <center><div class="radio1">
     
      <h4>~Renew your policy</h4>
      <Link to="/payment"><button>CLICK HERE</button></Link>
    </div></center>

   <center><div class="radio2">
     
     <h4>~Buy new policy</h4>
     <Link to="/policycomp"><button>CLICK HERE</button></Link>
    </div></center>
    <div class="mine5">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div></div>

  )
}

export default renewal