import React, { useState } from 'react'
import FrontNavbar from '../Navbars/FrontNavbar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { removeFromBasket } from '../Redux/Action/ProductAction'

function Cart() {
  const dispatch= useDispatch()
    const basket = useSelector(state=>state.product.basket) //state.basket dans le reducer
    console.log(basket)
    // Agréger les quantités pour chaque produit unique
  basket.forEach((e) => {
    const prodId = e.pro._id;
    quantitesParProduit[prodId] = (quantitesParProduit[prodId] || 0) + e.quantity;
  });

  // Créer une nouvelle liste d'objets agrégée
  const produitsAchats = Object.keys(quantitesParProduit).map((prodId) => {
    const produit = basket.find((e) => e.pro._id === prodId).pro;
    const quantiteTotale = quantitesParProduit[prodId];
    return { produit, quantiteTotale };
  });

    const paiement=async ()=>{
        const res=await axios
        .post('/paiement/create-checkout-session',{basket})
        .then(res=> {
            if (res.data.url){
                window.location.href =res.data.url
            }
        })
      }
      const [quantity, setQuantity] = useState(1) 
      const quantitesParProduit = {};

  return (
    <>
    <FrontNavbar/>
        <div className="container">
  {/* HERO SECTION*/}
  <section className="py-5 bg-light">
    <div className="container">
      <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
        <div className="col-lg-6">
          <h1 className="h2 text-uppercase mb-0">Cart</h1>
        </div>
        <div className="col-lg-6 text-lg-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
              <li className="breadcrumb-item">
                <a className="text-dark" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
    <div className="row">
      <div className="col-lg-8 mb-4 mb-lg-0">
        {/* CART TABLE*/}
        <div className="table-responsive mb-4">
          <table className="table text-nowrap">
            <thead className="bg-light">
              <tr>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Product</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Price</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Quantity</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase">Total</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  {" "}
                  <strong className="text-sm text-uppercase" />
                </th>
              </tr>
            </thead>
            <tbody className="border-0">
              
              
            {basket.map((e)=>
              (
                <tr>
                <th className="ps-0 py-3 border-light" scope="row">
                  <div className="d-flex align-items-center">
                    <a
                      className="reset-anchor d-block animsition-link"
                      href="detail.html"
                    >
                      <img
                        src={e.pro.Avatar}
                        alt="..."
                        width={70}
                      />
                    </a>
                    <div className="ms-3">
                      <strong className="h6">
                        <a
                          className="reset-anchor animsition-link"
                          href="detail.html"
                        >
                          {e.pro.Name}
                        </a>
                      </strong>
                    </div>
                  </div>
                </th>
                <td className="p-3 align-middle border-light">
                  <p className="mb-0 small">${e.pro.Price}</p>
                </td>
                <td className="p-3 align-middle border-light">
                  <div className="border d-flex align-items-center justify-content-between px-3">
                     
                    <div className="quantity">
                      <button className="dec-btn p-0"
                        onClick={()=>quantity>1?setQuantity (quantity-1):quantity}>
                        <i className="fas fa-solid fa-minus" />
                      </button>
                      <input
                        className="form-control form-control-sm border-0 shadow-0 p-0"
                        type="text"
                        value= {e.quantity}
                      />
                      <button className="inc-btn p-0"
                        onClick={()=>setQuantity (quantity+1)}>
                        <i className="fas fa-caret-left fa-solid fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="p-3 align-middle border-light">
                  <p className="mb-0 small">${basket.reduce((acc,e)=> 
                      acc + e.pro.Price * e.quantity,0)}</p>
                </td>
                <td className="p-3 align-middle border-light">
                  <a className="reset-anchor" onClick={()=>dispatch(removeFromBasket(e.pro._id))}>
                    <i className="fas fa-trash-alt small text-muted" />
                  </a>
                </td>
              </tr>
              )
            )}
              
              
            </tbody>
          </table>
        </div>
        {/* CART NAV*/}
        <div className="bg-light px-4 py-3">
          <div className="row align-items-center text-center">
            <div className="col-md-6 mb-3 mb-md-0 text-md-start">
              <a className="btn btn-link p-0 text-dark btn-sm" href="shop.html">
                <i className="fas fa-long-arrow-alt-left me-2"> </i>Continue
                shopping
              </a>
            </div>
            <div className="col-md-6 text-md-end">
              <a className="btn btn-outline-dark btn-sm" href="checkout.html">
                Procceed to checkout
                <i className="fas fa-long-arrow-alt-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ORDER TOTAL*/}
      <div className="col-lg-4">
        <div className="card border-0 rounded-0 p-lg-4 bg-light">
          <div className="card-body">
            <h5 className="text-uppercase mb-4">Cart total</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center justify-content-between">
                <strong className="text-uppercase small font-weight-bold">
                  Subtotal
                </strong>
                <span className="text-muted small">$250</span>
              </li>
              <li className="border-bottom my-2" />
              <li className="d-flex align-items-center justify-content-between mb-4">
                <strong className="text-uppercase small font-weight-bold">
                  Total
                </strong>
                <span>$250</span>
              </li>
              <li>
                <form action="#">
                  <div className="input-group mb-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your coupon"
                    />
                    <button className="btn btn-dark btn-sm w-100" type="submit">
                      {" "}
                      <i className="fas fa-gift me-2" />
                      Apply coupon
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Cart
