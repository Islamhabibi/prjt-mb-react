import React, { useEffect, useState } from 'react'
import '../../assets/styles/css/style.default.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProducts } from '../Redux/Action/ProductAction';
function ProductsGroupe() {
  const [key, setKey] = useState('Droguerie');
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetAllProducts())
  },[])
  const userFormState = useSelector((state)=> state.product.products)
 const namCatg = userFormState.idCategorie
  console.log(userFormState)
  return (
    <><section className="py-5">
    <header class="mb-3 text-center">
      <p className="small text-muted small text-uppercase mb-1">
        Made the hard way
      </p>
      <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
    </header>
     <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Droguerie" title="Droguerie" >
      <div className="row">
        {userFormState?.map(
          (e)=>((e.idCategorie === key)?
        <><div class="col-xl-3 col-lg-4 col-sm-6">
             <div className="product text-center">
        <div className="position-relative mb-3">
          <div className="badge text-white bg-" />
          <a className="d-block" href="detail.html">
            <img
              className="img-fluid w-100"
              src={e.Avatar}
              alt="..."
            />
          </a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-outline-dark" href="#!">
                  <i className="far fa-heart" />
                </a>
              </li>
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-dark" href="cart.html">
                  Add to cart
                </a>
              </li>
              <li className="list-inline-item me-0">
                <a
                  className="btn btn-sm btn-outline-dark"
                  href="#productView"
                  data-bs-toggle="modal"
                >
                  <i className="fas fa-expand" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          {" "}
          <a className="reset-anchor" href="detail.html">
            Kui Ye Chen’s AirPods
          </a>
        </h6>
        <p className="small text-muted">$250</p>
      </div></div>
       </>:null
        ))}
         </div>  
      </Tab>
      <Tab eventKey="General hygiene" title="General hygiene">
      <div className="row">
        {userFormState?.map(
          (e)=>((e.idCategorie === key)?
        <><div class="col-xl-3 col-lg-4 col-sm-6">
             <div className="product text-center">
        <div className="position-relative mb-3">
          <div className="badge text-white bg-" />
          <a className="d-block" href="detail.html">
            <img
              className="img-fluid w-100"
              src={e.Avatar}
              alt="..."
            />
          </a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-outline-dark" href="#!">
                  <i className="far fa-heart" />
                </a>
              </li>
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-dark" href="cart.html">
                  Add to cart
                </a>
              </li>
              <li className="list-inline-item me-0">
                <a
                  className="btn btn-sm btn-outline-dark"
                  href="#productView"
                  data-bs-toggle="modal"
                >
                  <i className="fas fa-expand" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          {" "}
          <a className="reset-anchor" href="detail.html">
            Kui Ye Chen’s AirPods
          </a>
        </h6>
        <p className="small text-muted">$250</p>
      </div></div>
       </>:null
        ))}
         </div>
      </Tab>
      <Tab eventKey="Brush" title="Brush">
      <div className="row">
        {userFormState?.map(
          (e)=>((e.idCategorie === key)?
        <><div class="col-xl-3 col-lg-4 col-sm-6">
             <div className="product text-center">
        <div className="position-relative mb-3">
          <div className="badge text-white bg-" />
          <a className="d-block" href="detail.html">
            <img
              className="img-fluid w-100"
              src={e.Avatar}
              alt="..."
            />
          </a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-outline-dark" href="#!">
                  <i className="far fa-heart" />
                </a>
              </li>
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-dark" href="cart.html">
                  Add to cart
                </a>
              </li>
              <li className="list-inline-item me-0">
                <a
                  className="btn btn-sm btn-outline-dark"
                  href="#productView"
                  data-bs-toggle="modal"
                >
                  <i className="fas fa-expand" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          {" "}
          <a className="reset-anchor" href="detail.html">
            Kui Ye Chen’s AirPods
          </a>
        </h6>
        <p className="small text-muted">$250</p>
      </div></div>
       </>:null
        ))}
         </div>
      </Tab>
    </Tabs>
      
   
</section>

    </>
  )
}

export default ProductsGroupe
