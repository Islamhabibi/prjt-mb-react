import React, { useEffect, useState } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import Card from 'react-bootstrap/Card';
 import CardGroup from 'react-bootstrap/CardGroup';
 import { Button } from 'bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { DeleteProduct, removeFromBasket } from '../Redux/Action/ProductAction';
import FrontNavbar from '../Navbars/FrontNavbar';
import { Link } from 'react-router-dom';


function Basket() {
    const dispatch= useDispatch()
    const basket = useSelector(state=>state.product.basket) //state.basket dans le reducer
   // console.log(basket[0].quantity)
    const paiement=async ()=>{
        const res=await axios
        .post('/paiement/create-checkout-session',{basket})
        .then(res=> {
            if (res.data.url){
                window.location.href =res.data.url
            }
        })
      }
      const [quantity, setQuantity] = useState(0) 
      
   {/** groupe les memes product */}   
   const groupProducts = () => {
    const groupedProducts = [];

    basket.forEach((product) => {
      const existingProduct = groupedProducts.find(
        (p) => p.pro._id === product.pro._id
      );

      if (existingProduct) {
        
        existingProduct.quantity += product.quantity;
      } else {
        groupedProducts.push(product);
      }
    });
   // Calculate total for each product
    groupedProducts.forEach((product) => {
      product.total = product.pro.Price * product.quantity;
    });
     // Calculate total of all products
const total = groupedProducts.reduce((acc, product) => {
  return acc + product.total;
}, 0);

return { products: groupedProducts, total };
 };
 // Use the groupedProducts function to display the cart items
 const { products, total } = groupProducts();
 console.log(products)
 
 const cartItems = products.map((item) => (
     <> 
           
     <tr key={item.pro._id}> 
                <th className="p-3 pl-0 border-0" scope="row">
                  <div className="d-flex align-items-center">
                    <a
                      className="reset-anchor d-block animsition-link"
                      href="detail.html"
                    >
                      <img
                        src={item.pro.Avatar}
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
                          {item.pro.Name}
                        </a>
                      </strong>
                    </div>
                  </div>
                </th>
                <td className="p-3 align-middle border-0">
                  <p className="mb-0 small">${item.pro.Price}</p>
                </td>
                <td className="p-3 align-middle border-0">
                  <div className="border d-inline-block px-2">
                    <div className="quantity">
                      
                      <input
                        className="form-control border-0 shadow-0 p-0 quantity-result"
                        type="text"
                        value={item.quantity}
                      />
                     
                    </div>
                  </div>
                </td>
                <td className="p-3 align-middle border-0">
                  <p className="mb-0 small">${item.total.toFixed(2)}</p>
                </td>
                <td className="p-3 align-middle border-0">
                  <a className="reset-anchor" href="#">
                    <i className="fas fa-trash-alt small text-muted" onClick={()=>dispatch(removeFromBasket(item.pro._id))} />
                  </a>
                </td>
              </tr></>
  ));
 
   
  return (
    <>
    <FrontNavbar/>
    <section className="py-5">
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {/* Navigation*/}
        <header className="text-center mb-5">
          <h2>Shopping cart</h2>
        </header>
        {/* Shopping cart*/}
        <div className="table-responsive mb-4">
          <table className="table">
            <thead className="bg-light">
              <tr>
                <th className="p-3 border-0" scope="col">
                  <strong className="text-uppercase">Product</strong>
                </th>
                <th className="p-3 border-0" scope="col">
                  <strong className="text-uppercase">Price</strong>
                </th>
                <th className="p-3 border-0" scope="col">
                  <strong className="text-uppercase">Quantity</strong>
                </th>
                <th className="p-3 border-0" scope="col">
                  <strong className="text-uppercase">Total</strong>
                </th>
                <th className="p-3 border-0" scope="col">
                  <strong className="text-uppercase" />
                </th>
              </tr>
            </thead>
            <tbody>
            {cartItems}
               
            </tbody>
          </table>
          {/* Cart footer*/}
          <div className="bg-light p-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item py-1">
                    
                    <Link className=" btn btn-outline-primary" to={'/'}>
                      {" "}
                      <i className="fas fa-shopping-bag me-2" />
                      Continue shopping
                    </Link>
                  </li>
                  <li className="list-inline-item py-1">
                    <a className="btn btn-primary" onClick={paiement}>
                      {" "}
                      <i className="far fa-credit-card me-2" />
                      Process checkout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 text-start text-md-end">
                <p className="text-muted mb-1">Cart total</p>
                <h6 className="h4 mb-0">$ {total.toFixed(2)}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Basket