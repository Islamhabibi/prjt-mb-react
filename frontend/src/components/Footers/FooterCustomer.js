import React from 'react'

function FooterCustomer() {
  return (
    <>
      <footer className="bg-dark">
  <div className="container py-5">
    <div className="row">
      <div className="col-md-4 col-sm-12 mb-3 mb-md-0">
        <img
          className="img-fluid mb-3"
          src="https://d19m59y37dris4.cloudfront.net/shopio/1-1/img/logo-white.5bd15ea4.svg"
          alt="Patrol"
          width={120}
        />
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
      <div className="col-md-2 col-sm-12 mb-3 mb-md-0">
        <h6 className="text-white">Menu</h6>
        <ul className="list-unstyled text-muted mb-0">
          <li className="mb-2">
            {" "}
            <a className="reset-anchor" href="#">
              About
            </a>
          </li>
          <li className="mb-2">
            <a className="reset-anchor" href="#">
              Blog
            </a>
          </li>
          <li className="mb-2">
            <a className="reset-anchor" href="#">
              Contact
            </a>
          </li>
          <li className="mb-2">
            <a className="reset-anchor" href="#">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-2 col-sm-12 mb-3 mb-md-0">
        <h6 className="text-white">Checkout</h6>
        <ul className="list-unstyled text-muted mb-0">
          <li className="mb-2">
            {" "}
            <a className="reset-anchor" href="#">
              My Account
            </a>
          </li>
          <li className="mb-2">
            {" "}
            <a className="reset-anchor" href="#">
              Orders Tracking
            </a>
          </li>
          <li className="mb-2">
            {" "}
            <a className="reset-anchor" href="#">
              Checkout
            </a>
          </li>
          <li className="mb-2">
            {" "}
            <a className="reset-anchor" href="#">
              Wishlist
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-12 mb-3 mb-md-0">
        <p className="lead mb-1 text-white">
          <a className="reset-anchor" href="tel:+1 123 456 789">
            +1 123 456 789
          </a>
        </p>
        <p className="text-muted">12 El Dorado, Las Vegas, AZ</p>
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <a className="social-icon" href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="social-icon" href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="social-icon" href="#">
              <i className="fab fa-youtube" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="social-icon" href="#">
              <i className="fab fa-pinterest" />
            </a>
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
              className="text-white reset-anchor"
              href="https://bootstrapious.com/e-commerce-templates"
            >
              Bootstrapious
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
