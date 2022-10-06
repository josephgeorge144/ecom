import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext ,AuthContext} from '../../store/Context';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [name,setName]= useState('')
  const [category,setCategory]= useState('')
  const [price,setPrice]= useState('');
  const [image,setImage]= useState('')
  
  const[db,auth,storage]=useContext(FirebaseContext)
  const{user}=useContext(AuthContext)
  const navigate=useNavigate()
  const date=new Date()


  const handleSubmit=(e)=>{
    e.preventDefault();
    storage.ref(`/image/${image.name}`).put(image).then(({ref})=>{ref.getDownloadURL().then((url)=>{console.log(url);
      db.collection('products').add({name,category,price,url,userId:user.uid,createdDate:date});navigate(0)
       
       })})
   
  
  }
 


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
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
            
        
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):''}></img>
          
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}  />
            <br />
            <button onClick={handleSubmit}  className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
