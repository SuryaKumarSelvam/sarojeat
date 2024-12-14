import {React,useState} from 'react'
import { IoCloseOutline } from "react-icons/io5";
import './SignIn.css'

const SignIn = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [fade, setFade] = useState(true); 

  const toggleRegister = () => {
    setFade(false);
    setTimeout(() => {
      setIsRegister(!isRegister); 
      setFade(true); 
    }, 300); 
  };
  return (
     <div className="login-container">
      <div className={`login-box ${fade ? "fade-in" : "fade-out"}`}>
        <h2>{isRegister ? "Create Account" : "Customer login"}</h2>

        {!isRegister ? (
          <>
            <input type="email" placeholder="Email" className="input-field" />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <button className="login-btn">Login</button>
            <div className="form-links">
              <a href="#" className="link">
                Forgot your password?
              </a>
              <p className="toggle-link" onClick={toggleRegister}>
                New Customer? <span>Sign up!</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <input type="text" placeholder="First Name" className="input-field" />
            <input type="text" placeholder="Last Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <button className="login-btn">Sign Up</button>
            <p className="toggle-link" onClick={toggleRegister}>
              Already have an account? <span>Login here</span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default SignIn