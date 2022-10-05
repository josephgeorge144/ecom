import React, { useState,useContext } from 'react'

import './Header.css'
import OlxLogo from '../../Assets/OlxLogo';
import Search from '../../Assets/Search';
import Arrow from '../../Assets/Arrow';
import SellButton from '../../Assets/SellButton';
import SellButtonPlus from '../../Assets/SellButtonPlus';
import{ Routes,Route,Link} from 'react-router-dom'
import Login from '../../Components/Login/Login'
import { AuthContext,FirebaseContext } from '../../store/Context';


function Header(props) {

const [display, setDisplay] = useState('none')
const [color, setColor] = useState('rgba(0,0,0,0.4)')
const [login, setLogin] = useState(false)
const{user}=useContext(AuthContext);
const [firebase,auth]=useContext(FirebaseContext)



  const handleClick=(e)=>{
  //  setDisplay("block")
   setLogin(true)
  //  props.onchange(color)



  }
  const handleLogin=(value)=>{
    
     setLogin(value)

  
  
  
    }
  return (
    <div className="fadedview" >
    <div className="headerParentDiv">
          <div className="headerChildDiv">
          <div className="brandName">
          <Link to='/'> <OlxLogo></OlxLogo></Link>
         
        </div>

        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>

        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#FFFFFF"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <a className='loginbutton' onClick={handleClick}>{user ?user.email:'Login'}</a>
        <hr/>
            {login && <div className='logindiv' ><Login onClick={handleLogin} /></div>} 
        
        
      
           
          
        </div>
        {user && <button className='logoutbutton' onClick={()=>{
          auth.signOut()
        }}>logout</button>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
      </div>

        







         
       
    </div>
  )
}

export default Header