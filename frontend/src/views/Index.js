import React from 'react'
import Carousel from '../components/Customerview/Carousel'
import ProductsCarousel from '../components/Customerview/ProductsCarousel'
import Davider from '../components/Customerview/Davider'
import Collectioncateg from '../components/Customerview/Collectioncateg'
 function Index() {
  return (
    <>
      <Carousel/>
      <Collectioncateg/>
      <ProductsCarousel/>
      <Davider/>
      <ProductsCarousel/>
    </>
  )
}

export default Index
