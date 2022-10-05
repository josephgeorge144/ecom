import React, { useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts';


function Home() {
  const [bgcolor, setbgcolor] = useState('none')
  const onchange=(color)=>{
    setbgcolor(color)
  }
  return (
    <div style={{backgroundColor:bgcolor}}>
       <Header onchange={onchange} />
       <Banner/>
       <Posts/>
       <Footer/>
    </div>
  )
}

export default Home