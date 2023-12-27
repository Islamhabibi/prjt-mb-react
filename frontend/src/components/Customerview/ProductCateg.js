import React from 'react'
import Cart from './Cart'
import Menucategvertical from './Menucategvertical'
import FrontNavbar from '../Navbars/FrontNavbar'

function ProductCateg() {
  return (
    <>
       <FrontNavbar/> 
        <div className="container">
  {/* HERO SECTION*/}
  <section className="py-5">
  <div className="container py-5">
    <div className="row">
      <div className="col-xl-2 col-lg-3 order-2 order-lg-1">
        <h5 className="mb-4">Shop by Category</h5>
         <Menucategvertical/>
      </div> 
      {/* Shop listing*/}
      <div className="col-xl-10 col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
        {/* Listing filter*/}
        <div className="row">
          {/* Product*/}
            <Cart/>
        </div>
      </div>
    </div>
  </div>
</section>
  
</div>
    </>
  )
}

export default ProductCateg
