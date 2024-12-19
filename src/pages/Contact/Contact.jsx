import React from 'react'
import './Contact.css';
import {TextField,Select,MenuItem} from '@mui/material';


const Contact = () => {
  return (
        <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong>
          <br />
           SAROJ eats
          <br />
           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          <br />
           xxxxxxxxxxxxxxxxxxxxxxxxxxxx
          <br />
           xxxxxxxxxxxxxxxxxxxxxxxxxxxx
          <br />
          <br />
          <strong>Mobile:</strong> 999999999
          <br />
          <strong>Email ID:</strong>{" "}
          <a href="#">
            contact@email.com
          </a>
        </p>
      </div>
      <div className="contact-form">
        <form>
         <TextField id="outlined-basic" label="Name" variant="outlined" className="input-field" />
         <TextField id="outlined-basic" label="Subject" variant="outlined" className="input-field" />
         <TextField id="outlined-basic" label="Mobile Number" variant="outlined" className="input-field" />
         <TextField id="outlined-basic" label="Email" variant="outlined" className="input-field" />
          <TextField id="filled-basic" label="Message" variant="filled" className="input-field" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact