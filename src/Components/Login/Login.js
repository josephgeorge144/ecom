import React, { useState } from 'react';

import Logo from '../../Assets/images/logo.png'
import './Login.css';
import { useContext } from 'react';
import { FirebaseContext,Justvalue } from '../../store/Context';
import{ Routes,Route,Link} from 'react-router-dom'


function Login(props) {
  const [loginname,setLoginname]=useState('')
  const[password,setPassword]=useState('')
  const [load,setLoad]=useState(false)
 
 
 
  const [firebase,auth]=useContext(FirebaseContext)
  const handleLogin=(e)=>{
    e.preventDefault()
    setLoad(true)
    console.log("passW",password)
    auth.signInWithEmailAndPassword(loginname,password).then(()=>{alert('loggedi n'); setLoad(false);props.successfullSignin(false) }).catch((error)=>{
     setLoad(false) 
      alert(`the error is ${error}`)})
  }

  const handleClick=()=>{
    props.onClick(false)
  }


  return (
    <div>
      <div className="loginParentDiv animate">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={loginname}
            onChange={(e)=>{
              setLoginname(e.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <br />
          <br />
          <button>{load ? 'Loading':'Login'}</button>
        </form>
       <Link to='/signup'>Signup</Link>
      <a onClick={handleClick}>Cancel</a>
      </div>
    </div>
  );
}

export default Login;
