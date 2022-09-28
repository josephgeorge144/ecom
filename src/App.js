import React from 'react';
import './App.css';
import { ReactDOM } from 'react';
import{ Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home';



/**
 * ?  =====Import Components=====
 */



function App() {
  return (
    <div>
{/* 
<Link to='/'>Home</Link> */}
      
    
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
      
        


      
    
    
      App
    </div>
  );
}

export default App;
