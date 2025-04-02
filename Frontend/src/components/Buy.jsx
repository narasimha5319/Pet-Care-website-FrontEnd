import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Import SweetAlert2
import "../assets/buy.css";

const ContactMe = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k918sc9', 'template_qx0wtk2', form.current, 'aYX9HugUw1ZT0wy6U')
      .then((result) => {
          console.log(result.text);
          setShowPopup(true);
          // Use SweetAlert2 to show a custom alert
          Swal.fire({
            title: 'Success!',
            text: 'Owner has received your message; we will contact you soon. Have a good day!',
            icon: 'success',
            confirmButtonColor: '#007bff',
            confirmButtonText: 'Close'
          });
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
      });

    e.target.reset();
  };

  return (
    <div className="container">
      <h1>Let's Create Something Extraordinary!</h1>
      <p>If you're ready to turn your ideas into reality, fill out the form below and let's get started!</p>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required aria-label="Your Name" />
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required aria-label="Your Email" />
        <label htmlFor="phone">Your Phone Number:</label>
        <input type="tel" id="phone" name="phone" required aria-label="Your Phone Number" />
        <label htmlFor="description">Description about your pet:</label>
        <textarea id="description" name="description" required aria-label="Description about your pet"></textarea>
        <label htmlFor="budget">Budget:</label>
        <input type="number" id="budget" name="budget" required aria-label="Budget" />
        <input type="submit" value="Submit" />
      </form>

      {/* {showPopup && (
        <div className="popup">
          <p>Owner has received your message; we will contact you soon. Have a good day!</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )} */}

      <div className="social-links">
        <h2>Connect with me:</h2>
        <ul>
          <li>
            <a href="mailto:mvsr26032005@gmail.com" aria-label="Email">
              <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Email" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mopuru-venkata-srikanth-reddy-3010b4267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/csharikrishna" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
