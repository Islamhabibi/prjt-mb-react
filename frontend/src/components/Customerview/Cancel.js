import React from 'react'
import FrontNavbar from '../Navbars/FrontNavbar'

function Cancel() {
  return (
    <div>
      <FrontNavbar/>
      <div className="text-center">
    <svg className="svg-icon text-primary svg-icon-xl svg-icon-light mb-4">
      <use xlinkHref="#delivery-time-1"> </use>
    </svg>
    <h1>Sorry</h1>
    <div className="row">
      <div className="col-lg-7 mx-auto">
        <p className="text-muted mb-4">
         But payment has not been made
        </p>
      </div>
    </div>
    <a className="btn btn-primary" href={"/"}>
      {" "}
      
      Go page home
    </a>
  </div>
  </div>
  )
}

export default Cancel