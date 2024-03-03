import React, { useRef } from 'react';
import "./contact.css";
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Your emailjs configuration
    const serviceId = 'service_8anue9j';
    const templateId = 'template_kz169yy';
    const userId = 'GnZEuIkF0-Zax5szN';

    // Get form data
    const formData = new FormData(form.current);
    
    // Construct the email parameters
    const params = {
      to_name: formData.get('your_name'),
      from_name: formData.get('your_email'),
      message: formData.get('message'),
    };

    // Send email using emailjs
    emailjs.send(serviceId, templateId, params, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className='contact'>
      <h1 className='contactpagetitle'>Contact</h1>
      <span className='contactdesc'>Please fill out this form below</span>
      <form className='contactform' ref={form} onSubmit={sendEmail}>
        <input type='text' placeholder='Name' className='contactname' name="your_name" required/>
        <input type='email' placeholder='Email' className='contactname' name="your_email" required />

        <textarea rows="5" name='message' className='contactcomment' required placeholder='Enter your comment here'></textarea>
        
        {/* Use the 'button' type for form submission */}
        <button className='contactbtn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
