import React from 'react'
import clt1 from '../../assets/img/slider/papier2.jpg'
import clt2 from '../../assets/img/slider/brosserie.jpg'
import clt3 from '../../assets/img/slider/prd_hyg.jpg'
import clt4 from '../../assets/img/slider/sac.jpg'
import '../../assets/styles/css/style.default.css'
function Collectioncateg() {
  return (
    < >
      <section className="pt-5">
     
  <header className="text-center">
    <p className="small text-muted small text-uppercase mb-1">
      Carefully created collections
    </p>
    <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
  </header>
  <div className="row">
    <div className="col-md-4">
      <a className="category-item" href="shop.html">
        <img className="img-fluid" src={clt1} alt="" />
        <strong className="category-item-title">Wiping Paper</strong>
      </a>
    </div>
    <div className="col-md-4">
      <a className="category-item mb-4" href="shop.html">
        <img className="img-fluid" src={clt2} alt="" />
        <strong className="category-item-title">Brush</strong>
      </a>
      <a className="category-item" href="shop.html">
        <img className="img-fluid" src={clt3} alt="" />
        <strong className="category-item-title">Hygiene products</strong>
      </a>
    </div>
    <div className="col-md-4">
      <a className="category-item" href="shop.html">
        <img className="img-fluid" src={clt4} alt="" />
        <strong className="category-item-title">Trash</strong>
      </a>
    </div>
  </div> 
</section>

    </ >
  )
}

export default Collectioncateg
