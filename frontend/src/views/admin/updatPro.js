import React from 'react'
import CardUpdateProduct from '../../components/Cards/CardsProduct/CardUpdateProduct'
import AdminNavbar from '../../components/Navbars/AdminNavbar'
import FooterAdmin from '../../components/Footers/FooterAdmin'

function UpdatPro() {
  return (
    <>
    <div className= 'layout-navbar container shadow-none py-0'><AdminNavbar/></div>
    
    <div className="container-xxl flex-grow-1 container-p-y " style={{marginTop:"2%"}}>
      <CardUpdateProduct/>
    </div>
    <FooterAdmin/>
  </>
  )
}

export default UpdatPro
