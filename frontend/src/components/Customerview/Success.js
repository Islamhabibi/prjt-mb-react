import React from 'react'
import FrontNavbar from '../Navbars/FrontNavbar'

function Success() {
  return (
    <div>
      <FrontNavbar/>
      <div className="text-center">
    <svg className="svg-icon text-primary svg-icon-xl svg-icon-light mb-4">
      <use xlinkHref="#delivery-time-1"> </use>
    </svg>
    <h1>Thank you</h1>
    <div className="row">
      <div className="col-lg-7 mx-auto">
        <p className="text-muted mb-4">
        Your order will be processed as soon as possible
        </p>
      </div>
    </div>
    <a className="btn btn-primary" href={"/"}>
      {" "}
      <i className="fas fa-shopping-bag me-2" />
      Continue shopping
    </a>
  </div>
  </div>
  )
}

export default Success