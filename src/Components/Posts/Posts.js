import React from "react";
import Heart from '../../Assets/Heart';
import './Posts.css';
import ym1 from '../../Assets/images/ym1.jpg'
function Posts() {

    return (
      <div className="postParentDiv">
        <div className="moreView">
          <div className="heading">
            <span>Quick Menu</span>
            <span>View more</span>
          </div>
          
          
          <div className="cards">
           
           
           
            <div
              className="card"
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={ym1} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 250000</p>
                <span className="kilometer">Two Wheeler</span>
                <p className="name"> YAMAHA R15V3</p>
              </div>
              <div className="date">
                <span>Tue May 04 2021</span>
              </div>
            </div>

            <div
              className="card"
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={ym1} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 250000</p>
                <span className="kilometer">Two Wheeler</span>
                <p className="name"> YAMAHA R15V3</p>
              </div>
              <div className="date">
                <span>Tue May 04 2021</span>
              </div>
            </div>

            <div
              className="card"
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={ym1} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 250000</p>
                <span className="kilometer">Two Wheeler</span>
                <p className="name"> YAMAHA R15V3</p>
              </div>
              <div className="date">
                <span>Tue May 04 2021</span>
              </div>
            </div>




          </div>
        </div>



        <div className="recommendations">
          <div className="heading">
            <span>Fresh recommendations</span>
          </div>
          <div className="cards">
            <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={ym1}alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 250000</p>
                <span className="kilometer">Two Wheeler</span>
                <p className="name"> YAMAHA R15V3</p>
              </div>
              <div className="date">
                <span>10/5/2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Posts;
  