import React, { useEffect, useState } from 'react';
import './contact.css'; // Import the CSS file for the component
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const ContactPage = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleNameChange = (e) =>{
    setName(e.target.value);
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  }
  const handleMessageChange = (e) =>{
    setMessage(e.target.value);
  }

  const feedSubmit = async (e) => {
    e.preventDefault();
    const data = {"name":name,"email":email,"message":message};
    // console.log(data);
    axios.post("http://localhost:8081/feedback/addfeed",data);
    toast.success('Feedback Submitted Successfully !', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
  setTimeout(() => {
      window.location.reload();
  }, 2500);
  }
  return (
    <>
    {/* <Navbar /> */}
    <div className='outer-cont'>
    <div className="contact-page">
      <h1>Contact Us</h1>
      {/* <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
          /> */}
      <p>
        We'd love to hear from you! Feel free to reach out to us with any inquiries or feedback regarding our Automobile Insurance Portal.
      </p>
      <div className="contact-info">
        <div>
          <h2>Visit Us</h2>
          <p>Safewheels</p>
          <p>Coimbatore, TamilNadu, 641028</p>
        </div>
        <div>
          <h2>Email Us</h2>
          <p>Safewheels@gmail.com</p>
        </div>
        <div>
          <h2>Call Us</h2>
          <p>Phone: 101-455-777</p>
        </div>
      </div>
      
      <h2>Send Us a Message</h2>
      <form className="contact-form" onSubmit={feedSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" name="name" value={name} onChange={handleNameChange} required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={message} onChange={handleMessageChange} required/>
        </div>
        <button type="submit">Send Message</button>
        
      </form>
      
    </div>
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default ContactPage;