import React from 'react'
import './policy.css';
import './dashboard';
import './payment';
import {Link} from 'react-router-dom';
function policy() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div class="policy">
      <center><h1>Policy Information </h1></center></div>
      <div class="report-body1">
                    <div class="box-container1"></div>
      <div class="box box810">
                        <div class="text">
                      
                            <center><h1 class="topic1">What is Automobile Insurance?</h1></center>
                            <div class="policy">
                            <center>
      
        <p>Automobile insurance, also known as auto insurance or car insurance, is a type of insurance policy that provides financial protection to vehicle owners against losses and damages that may arise from accidents, theft, or other unforeseen events related to their vehicles. Automobile insurance policies typically consist of several coverage types, each serving different purposes. Here's a description of the key components commonly found in an automobile insurance policy:</p></center>
      <center><p>Liability Coverage</p>
      <p>Collision Coverage</p>
      <p>Comprehensive Coverage</p>
      <p>Personal Injury Protection (PIP)</p></center>
</div>
</div>
</div>
<div class="box box8100">
                        <div class="text">
                      
                            <center><h1 class="topic1">PAY AS YOU DRIVE</h1></center>
                            <div class="policy1">
                            <center>
      <p>
      Pay as you drive insurance plan allows a policyholder to save up on their own damage premium. It is a kind of comprehensive car insurance plan that helps a policyholder reduce his/her premium based on the usage of the car.
      </p><br>
      </br>
      <p>The pay as you drive feature is offered in the Premium plan of safewheels.</p>
        </center>
</div>
</div>
</div>
      </div>
      <div class="mine">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  
  )
}

export default policy
