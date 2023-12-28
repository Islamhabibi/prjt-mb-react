import React from 'react'
 
import CardAddProduct from '../../components/Cards/CardsProduct/CardAddProduct'
import AdminNavbar from '../../components/Navbars/AdminNavbar'

function Products() {
  return (
    <>
   <AdminNavbar/>
    <div className="container-xxl flex-grow-1 container-p-y ">
      <CardAddProduct/>
    </div>
  </>
  )
}

export default Products
