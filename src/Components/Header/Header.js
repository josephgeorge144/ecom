import React from 'react'
import './Header.css'
import OlxLogo from '../../Assets/OlxLogo';
import Search from '../../Assets/Search';
import Arrow from '../../Assets/Arrow';
import SellButton from '../../Assets/SellButton';
import SellButtonPlus from '../../Assets/SellButtonPlus';

function Header() {
  return (
    <div className="headerParentDiv">
          <div className="headerChildDiv">
          <div className="brandName">
          <OlxLogo></OlxLogo>
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
          <span>Login</span>
          <hr />
        </div>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
        

        







         
       
    </div>
  )
}

export default Header