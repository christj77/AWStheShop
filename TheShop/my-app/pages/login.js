import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const responseGoogle = (response) => {
    // Handle the Google login response here
    console.log(response);
    // You'll get the user information in the response
    // You can pass this information to your backend for further processing
  };

  const onFailure = (error) => {
    // Handle login failure
    console.error('Google login failed:', error);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    try {

    
    }

    catch {

    }
    // Handle your login with email and password here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can send this data to your backend for authentication
  };

  return (
    <div>
      <Navbar />
     
      <h1>Login</h1>
      <form  action="Post">
        <div>
          <label>Email:</label>

          <input  type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" id=""/>

        </div>

        
        <div>
          <label>Password:</label>
          <input       type="password"     onChange={(e) => {setPassword(e.target.value)}} placeholder="password" id=""  />
        </div>
        
      </form>
      <div className='loginbutons'>
        <button type="submit" onClick={submit}>Login with Email</button>
        <br/>
        
        <br/>
      <GoogleLogin
        clientId="263326565819-4hua0loet7guoo0mggtc1co671v93t2u.apps.googleusercontent.com"
        
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        // You might need to specify additional parameters or scopes here as needed
      />
      </div>
      <hr />

  <Footer/>
    </div>
   
  );
};

export default Login;


 