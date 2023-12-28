import React from 'react'
import img from '../../assets/img/slider/newcllections2.jpg'
import { Link } from 'react-router-dom'
function Davider() {
  return (
    <>
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
            <div className="col-lg-6 ms-auto text-center">
              <h2 className="hero-heading   clor"> Conseils de Pro</h2>
              <h5 className="text-muted clor">
                Isabelle et Bertrand vous conseillent par téléphone au 04.66.59.21.77 ou 06.16.82.63.32. <br />
                Du Lundi au Vendredi de 8h à 17h
              </h5>
              <Link className="btn btn-primary" to={'/contact-us'}> Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Davider
