import React from 'react'
import './home.css';
import './Login';
import './createac';
import './about';
import {Link} from 'react-router-dom';
function logins() {
  return (
    <div>
      <header class="headersd">
        <div class="logo"><h2>Safewheels</h2></div>
        <nav class="nav-items">
        <Link to="/Login"><a>LOGIN</a></Link>
       <Link to="/about"><a>ABOUT</a></Link> 
       <Link to="/contact"><a>CONTACT</a></Link>
      </nav>
      </header>
      <main>
        <div class="intro">
          <h1>AUTOMOBILE INSURANCE</h1>
          <p>Your Security Our Priority</p>
          <Link to="/createac">
      <button>Register</button>
      </Link>
        </div>
      </main>
     <div class="iconss">
      </div>
    </div>
  )
}

export default logins