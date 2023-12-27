import React, { useEffect, useState } from 'react'
import FrontNavbar from '../Navbars/FrontNavbar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {  GetProductsbyCatg } from '../Redux/Action/ProductAction'
import { useParams } from 'react-router'
import Menucategvertical from './Menucategvertical'
import AdminNavbar from '../Navbars/AdminNavbar'
import FooterCustomer from '../Footers/FooterCustomer'

function Cart() {
  const dispatch = useDispatch()
  const NameCtg = useParams()
  useEffect(()=>{
    dispatch(GetProductsbyCatg(NameCtg.name))
    
  },[])
  const userFormState = useSelector((state)=> state.product.productsByCategory) 
      console.log('fff',userFormState)
      console.log(NameCtg)
   return (
    <>
    <AdminNavbar/>
     <div className="container">
  <section className="py-5">
  <div className="container py-5">
    <div className="row">
        
      {/* Shop listing*/}
      <div className="col-xl-12 col-lg-12 order-3 order-lg-3 mb-5 mb-lg-0">
        {/* Listing filter*/}
        <div className="row">
          {/* Product*/}
          {/* Product*/}
          {userFormState?.map((e)=>(
             <>
             <div className="col-xl-3 col-lg-4 col-6">
             <div className="product mb-4">
               
               <a href="detail.html">
                 <img
                   className="img-fluid"
                   src={e.Avatar}
                   alt="Round grey hanging decor"
                 />
               </a>
               <div className="cta shadow d-inline-block">
                 
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
             <p className="text-center text-muted font-weight-bold mb-4">
               $ {e.Price}
             </p>
           </div>
             
             </>
          ))}
           
       
           </div>
      </div>
    </div>
  </div>
</section>
  
</div>
<FooterCustomer/>
    </>
  )
}

export default Cart
