import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../components/Customerview/Carousel'
import ProductsCarousel from '../components/Customerview/ProductsCarousel'
import Davider from '../components/Customerview/Davider'
import Collectioncateg from '../components/Customerview/Collectioncateg'
import FooterCustomer from '../components/Footers/FooterCustomer'
import ProductsGroupe from '../components/Customerview/ProductsGroupe'
import FrontNavbar from '../components/Navbars/FrontNavbar'

import { GetAllProducts } from '../components/Redux/Action/ProductAction'

  function Index() {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(GetAllProducts())
    },[])
    const userFormState = useSelector((state)=> state.product.products) 
    
  return (
    <>
    <FrontNavbar/>
      <Carousel/>
      <div className="container py-5">
        <Collectioncateg/>
        <section className="py-5">
        <div className="container py-5">
          <header className="mb-3 text-center">
            <h2 className="mb-0">New arrivals</h2>
            <p className="text-muted">Browse the Newest Products</p>
          </header>
        <ProductsCarousel data={userFormState}/>
        </div>
        </section>
      </div>
      <Davider/>
      <div className="container py-5">
        <section className="py-5">
          <header className="mb-3 text-center">
            <p className="small text-muted small text-uppercase mb-1">
              Made the hard way
            </p>
            <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
          </header>
           <ProductsGroupe data={userFormState}/>
        </section>   
       </div>
      <FooterCustomer/>
    </>
  )
}

export default Index
