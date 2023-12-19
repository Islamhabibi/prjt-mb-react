import React from 'react'
import img from '../../assets/img/slider/newcllections2.jpg'
function Davider() {
  return (
    < >
      <section
  className="py-5 bg-center bg-cover"
  style={{
    background:
    `url(${img})`,
    height: '600px',
  }}
>
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-6 ms-auto">
        <h2 className="hero-heading">New watches collections</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a className="btn btn-primary" href="#">
          {" "}
          <i className="fas fa-shopping-bag-mr-2" />
          Shop now
        </a>
      </div>
    </div>
  </div>
</section>
    </ >
  )
}

export default Davider
