import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.css'

function Login(){

  
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const signIn = e =>{
      e.preventDefault();
    }
    
  
    return (
    <div className='login'>
    <Link to='/'>
      <img
      className='login_logo'
      src='https://www.askgalore.com/wp-content/uploads/2020/08/amazon-icon-amazon-logo-png-icon.png'
       />
    </Link>
    <div className="login_container">
      <h1>Sign-In</h1>
      <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
        <h5> Password </h5>
        <input type='password' value={password} onChange={e=> setPassword(e.target.value)}></input>
        <button onClick={signIn} type='submit' className='login_signInButton' >Sign In</button>
      </form>
      <p>
        By Signing-in you agree to the Amazon Fake 
        Clone Condition of Use & Sale.<br></br>
        Please see our Privacy Notice, 
        our Cookies Notice and our Interest-Based Ads Notice.
     </p>
     {/* <button onClick={} className='login_registerButton'> Create Your Amazon Account </button> */}
    </div>

    </div>
  )
  }
export default Login