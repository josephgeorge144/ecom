import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const [name,setName]= useState('')
  const [category,setCategory]= useState('')
  const [price,setPrice]= useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("the price is",category)
  }
  console.log("the name is",price)


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handleSubmit}> 
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname"  value={price}  onChange={(e)=>{
                setPrice(e.target.value)
              }} name="Price" />
            <br />
            
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src=""></img>
          <form>
            <br />
            <input type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
