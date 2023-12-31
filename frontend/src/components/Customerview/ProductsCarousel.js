import React, { useEffect, useState } from 'react'
import '../../assets/styles/css/pages/productsCarousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { addToBasket } from '../Redux/Action/ProductAction';
import { useDispatch } from 'react-redux';
import Icon from '@mdi/react';
import { mdiArrowExpandAll, mdiCartVariant } from '@mdi/js';


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
function ProductsCarousel({ data }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  //console.log({data})
  return (
    <>

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
            {data?.map((e) => (
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
                    <Link className="nav-link" to={`/detail-product/${e._id}`}>
                      <img
                        className="img-fluid"
                        src={e.Avatar}
                        alt="Kui Ye Chen’s AirPods"
                      />
                    </Link>
                    <div className="cta shadow d-inline-block">
                      <a
                        href={`/detail-product/${e._id}`}
                        className="product-btn"

                      >
                        <Icon path={mdiArrowExpandAll} size={1} />
                      </a>
                      <Link className="product-btn" onClick={() => dispatch(addToBasket({ pro: e, quantity }))}>
                        <Icon path={mdiCartVariant} size={1} />
                      </Link>
                    </div>
                  </div>
                  <h6 className="text-center">
                    <a className="reset-anchor" href={`/detail-product/${e._id}`}>
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



    </>

  )
}

export default ProductsCarousel
