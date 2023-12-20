import React from 'react'
import Carousel from '../components/Customerview/Carousel'
import ProductsCarousel from '../components/Customerview/ProductsCarousel'
import Davider from '../components/Customerview/Davider'
import Collectioncateg from '../components/Customerview/Collectioncateg'
import FooterCustomer from '../components/Footers/FooterCustomer'
import ProductsGroupe from '../components/Customerview/ProductsGroupe'
  function Index() {
  return (
    <>
      <Carousel/>
      <div class="container py-5">
      <Collectioncateg/>
      <ProductsCarousel/></div>
      <Davider/><div class="container py-5">
      <ProductsGroupe/>
       </div>
      <FooterCustomer/>
    </>
  )
}

export default Index
