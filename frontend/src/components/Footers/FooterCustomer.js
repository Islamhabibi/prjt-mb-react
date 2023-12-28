import React from 'react'
import logo from "../../assets/img/logo/mb-mt.png"
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiFacebook, mdiInstagram } from '@mdi/js'
function FooterCustomer() {
  return (
    <>
      <footer className="border-top">
  <div className="container py-5">
    <div className="row">
      <div className="col-md-4 col-sm-12 mb-3 mb-md-0">
      <Link to ={'/'}> 
        <img
          className="img-fluid mb-3"
          src={logo}
          alt="Patrol"
          width={200}
        /></Link>
        <p className="text-muted">We are Shopio.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <i className="fab fa-cc-visa text-gray" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-cc-mastercard text-gray" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-cc-discover text-gray" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-cc-paypal text-gray" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-cc-amex text-gray" />
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-12 mb-3 mb-md-0">
        <p className="lead mb-1 ">
          <a className="reset-anchor" href="tel:+33 466 592 177">
          (+33) 4 66 59 21 77
          </a>
        </p>
        <p className="text-muted">385 avenue Jean Monnet<br/>
          ZA Domitia - Route de Fourques
          30300 Beaucaire</p>
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <a className="social-icon" target="_blank" href="https://www.facebook.com/mbm30300/">
            <Icon path={mdiFacebook} size={1} />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="social-icon" target="_blank" href="https://www.instagram.com/mbbeaucaire/">
            <Icon path={mdiInstagram} size={1} />
            </a>
          </li>          
        </ul>
      </div>
      <div className="col-md-2 col-sm-12 mb-3 mb-md-0">
        <h6 className="">Menu</h6>
        <ul className="list-unstyled text-muted mb-0">
         
        <li className="mb-2">
            <a className="reset-anchor" href="/">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a className="reset-anchor" href="/contact-us">
              Contact us
            </a>
          </li>
          <li className="mb-2">
            {" "}
            <Link className="nav-link" to={'/basket'}>
              Checkout
            </Link>
          </li>
        </ul>
      </div>
     
    
    </div>
  </div>
  <div className="container">
    <div
      className="border-top py-4"
      style={{ borderColor: "#1d1d1d !important" }}
    >
      <div className="row">
        <div className="col-lg-6">
          <p className="small text-muted mb-0">© 2023 All rights reserved.</p>
        </div>
        <div className="col-lg-6 text-lg-end">
          <p className="small text-muted mb-0">
            Template designed by{" "}
            <a
              target="_blank"
              className=" reset-anchor"
              href="https://www.linkedin.com/in/islem-habibi-280447b4/"
            >
             Islem Habibi
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default FooterCustomer
