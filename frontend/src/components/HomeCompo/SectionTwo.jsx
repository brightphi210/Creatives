import React from 'react'
import './SectionTwo.css'

import { useState, useEffect } from 'react'
import axios from 'axios'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const SectionTwo = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.how 
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  const url = "http://127.0.0.1:8000/api/products/"
  // const profileUrl = "http://127.0.0.1:8000/api/creative/profile/"

  const [products, setProducts] = useState([])

  const fetchProduct = () => {

    axios.get(url).then((res) => {

      setProducts(res.data)
      console.log(res.data)

    }).catch(err => {
      console.log(err)
    })
  };

  useEffect(() => {
    fetchProduct();
  }, []);



  // const [profiles, setProfiles] = useState([])

  // const fetchProfile = () => {

  //   axios.get(profileUrl).then((res) => {

  //     setProfiles(res.data)
  //     console.log(res.data[1])

  //   }).catch(err => {
  //     console.log(err)
  //   })
  // };

  // useEffect(() => {
  //   fetchProfile();
  // }, []);

  return (
    <div>
      <section className='SectionTow'>
        <h2>Popular Service</h2>
        <div className='SectionTwoDiv'>

          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            itemClass="carousel-item-padding-40-px"
            ssr={true}
            infinite={true}
            autoPlaySpeed={100}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
          >


            {products.map(product => (
              <div className='SectionEachDivGen' data-aos="fade-up" data-aos-duration="1000">
                <div className='SectionEachDiv'>
                  <div className='SectionTowImage'>
                    <img key={product.id} src={product.image} alt="" />
                  </div>

                  <div className='overlay'>
                    <p key={product.id}>{product.productName}</p>
                    <i class="uil uil-heart-alt icons" ></i>
                  </div>
                </div>

                <div className='SectionTwoUser'>
                  {/* {
                    profiles.map(profile => {
                      if(profile.username === product.creativeAccount.username) {
                        return (
                          <img src={profile.profilePic} alt="" />
                    )} } )
                  } */}
                  <div key={product.id}>
                    <img  src={product.creatorProfile.profilePic} alt="" />
                  </div>
                  <p key={product.id}>@{product.creator.username}</p>
                  <i class="uil uil-heart-alt heart" >30</i>
                </div>
              </div>
            ))}

          </Carousel>
        </div>

      </section>
    </div>
  )
}

export default SectionTwo
