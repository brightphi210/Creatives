
import React from 'react'

import './CSS/dashHomePart.css'
import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import newImage1 from './images/861.jpg'
import newImage2 from './images/862.jpg'
import newImage3 from './images/863.jpg'
import newImage4 from './images/864.jpg'
import newImage5 from './images/865.jpg'
import newImage6 from './images/866.jpg'


const DashHomePart = () => {
  const location = useLocation();
  const state = location.state || {};
  const successMessage = state.successMessage;
  // const successMessage1 = state.successMessage;


  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [successMessage]);
  return (
    <div>
      <section className='dashHomePart'>
      {isVisible && successMessage && <p className='loginMessage'><i class="uil uil-exclamation-octagon"></i> {successMessage}</p>}
        <div className='dashHomePartFlex'>
          <div >

            <div className='secttionCards'>
              <div className='reviewsSection one'>
                <h3><i class="uil uil-archive"></i> 4</h3>
                <p>Products</p>
              </div>


              <div className='reviewsSection two'>
                <h3><i class="uil uil-heart"></i> 10</h3>
                <p>Favourites</p>
              </div>


              <div className='reviewsSection three'>
                <h3><i class="uil uil-eye"></i> 7</h3>
                <p>Reviews</p>
              </div>

              <div className='reviewsSection four'>
                <h3><i class="uil uil-comment-alt-lines"></i> 100</h3>
                <p>Messages</p>
              </div>
              
            </div>

            <div className='dashProductDiv'>
              <div className='dashProducts'>
                <img src={newImage1} alt="" />
                <p>This is image one</p>
              </div>

              <div className='dashProducts'>
                <img src={newImage2} alt="" />
                <p>This is image one</p>
              </div>

              <div className='dashProducts'>
                <img src={newImage3} alt="" />
                <p>This is image one</p>
              </div>

              <div className='dashProducts'>
                <img src={newImage4} alt="" />
                <p>This is image one</p>
              </div>
            </div>

          </div>

            <div className='dashRecent'>
              <h3>Recent Activity</h3>
              <div>
                <p>This is activity one</p>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default DashHomePart
