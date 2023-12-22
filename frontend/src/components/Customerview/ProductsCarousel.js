import React, { useEffect, useState } from 'react'
import '../../assets/styles/css/pages/productsCarousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProducts } from '../Redux/Action/ProductAction';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
function ProductsCarousel() {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetAllProducts())
  },[])
  const userFormState = useSelector((state)=> state.product.products)
  
  console.log(userFormState)
  return (
     <>
        <section className="py-5">
  <div className="container py-5">
    <header className="mb-3 text-center">
      <h2 className="mb-0">New arrivals</h2>
      <p className="text-muted">Browse the Newest Products</p>
    </header>
    <div
      className="swiper-container pt-5 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      id="newArrivals"
    >
      <div
        className="swiper-wrapper"
        id="swiper-wrapper-9776f8fd3f467b96"
        aria-live="polite"
        
      >
        
        <Carousel             
            draggable={false}
            showDots={true}
            responsive={responsive}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}            
        >  
          {userFormState?.map((e)=>(
            <div>
            <div
              className="swiper-slide pb-5 swiper-slide-duplicate"
              data-swiper-slide-index={4}
              role="group"
              aria-label="5 / 9"
              style={{ width: "237.6px", marginRight: 25 }}
            >
              <div className="product mb-4">
              <span className="badge rounded-0 bg-" />
              <a href="detail.html">
                <img
                  className="img-fluid"
                  src={e.Avatar}
                  alt="Kui Ye Chen’s AirPods"
                />
              </a>
              <div className="cta shadow d-inline-block">
                <a className="product-btn" href="#">
                  <i className="fas fa-heart" />
                </a>
                <a
                  className="product-btn"
                  href="#productView"
                  data-bs-toggle="modal"
                >
                  <i className="fas fa-expand" />
                </a>
                <a className="product-btn" href="cart.html">
                  <i className="fas fa-dolly-flatbed" />
                </a>
              </div>
          </div>
          <h6 className="text-center">
            <a className="reset-anchor" href="detail.html">
            {e.Name}
            </a>
          </h6>
          <p className="text-center text-muted font-weight-bold">${e.Price}</p>
        </div>
      </div>
          ))}
          
          
         
        </Carousel>;
          
       
      </div>
    </div>
  </div>
</section>


     </>
  
  )
}

export default ProductsCarousel
