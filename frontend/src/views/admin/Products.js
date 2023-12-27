import React from 'react'
 
import CardAddProduct from '../../components/Cards/CardsProduct/CardAddProduct'
import Navbar from '../../components/Navbars/Navbar'

function Products() {
  return (
    <>
    <Navbar/>
    <div class="container-xxl flex-grow-1 container-p-y ">
      <CardAddProduct/>
    </div>
  </>
  )
}

export default Products
