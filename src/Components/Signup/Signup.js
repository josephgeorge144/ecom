import React, { useState } from 'react';

import Logo from '../../Assets/images/logo.png';
import './Signup.css';
import { useContext } from 'react';
import { FirebaseContext, Justvalue } from '../../store/Context';
import {useNavigate} from 'react-router-dom'
import{ Routes,Route,Link} from 'react-router-dom'
import Login from '../../Components/Login/Login'

;


export default function Signup() {
 const [userName,setUsername]=useState('');
 const [email,setEmail]=useState('');
 const [number,setNumber]=useState('');
 const[password,setPassword]=useState('');

 const [loading, setLoading] = useState(false)

 const [firebase,auth]=useContext(FirebaseContext)
 const history=useNavigate()

 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(loading)
 
  
    setLoading(true)
  auth.createUserWithEmailAndPassword(email,password).catch(error=>{
   setLoading(false)
    console.log(error,"error")})
  
  
  .then((result)=>{
    
    result.user.updateProfile({dislplayName:userName}).then(()=>{firebase.collection('Users').add({username:userName,id:result.user.uid,phone:number})})
    .then(()=>{
      setLoading(false)
      history('/login')
    })
  });




 }


 

  return (
    

    <div>
       
      
      
    
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            
            onChange={(e)=>{
             
              setUsername(e.target.value)
              
            }}
            value={userName}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)} 

            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>{loading ? 'Loading':'submit'}</button>
   
      
          
        </form>
        <a>Login</a>
      </div>
      <h1>kx;fc</h1>
    
      


    

    </div>
  );
}
