import React, { useState,useEffect,useContext } from 'react';
import './App.css';
import { ReactDOM } from 'react';
import{ Routes,Route,Link, useNavigate} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Components/Login/Login'
import Carrier from './carrier';
import { AuthContext ,c,FirebaseContext} from './store/Context';
import Create from './Pages/Create'   






/**
 * ?  =====Import Components=====
 */



function App(props) {

  const {user,setUser}=useContext(AuthContext)
  const[db,auth]=useContext(FirebaseContext)
  useEffect(()=>{
    
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
   


  },)
  

  return (

      <div>

    
      <Routes>
        
        <Route  path="/" element={<Home/>}> </Route>
        <Route  path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/create' element={<Create/>}> </Route>
   
      </Routes>
      
      
        


  
    
      App
    
    </div>
  );
}

export default App;

