import React, { useEffect, useState } from 'react'
import '../../assets/styles/css/style.default.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { addToBasket } from '../Redux/Action/ProductAction';
import { useDispatch } from 'react-redux';
function ProductsGroupe( {data}) {
  const dispatch = useDispatch()
  const [key, setKey] = useState('Droguerie');
  const [quantity, setQuantity] = useState(1)
  //console.log({data})
  return (
    <>
    
     <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Droguerie" title="Droguerie" >
      <div className="row">
        {data?.map(
          (e)=>((e.idCategorie === key)?
        <><div class="col-xl-3 col-lg-4 col-sm-6">
             <div className="product text-center">
        <div className="position-relative mb-3">
          <div className="badge text-white bg-" />
          <a className="d-block" href={`/detail-product/${e._id}`}>
            <img
              className="img-fluid w-100" 
              src={e.Avatar}
              alt="..."
            />
          </a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-dark" onClick={()=>dispatch(addToBasket({pro:e, quantity}))}>
                  Add to cart
                </a>
              </li>
              <li className="list-inline-item me-0">
                <a
                  className="btn btn-sm btn-outline-dark"
                  href={`/detail-product/${e._id}`}
                  
                >
                  <i className="fas fa-expand" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          {" "}
          <a className="reset-anchor" href={`/detail-product/${e._id}`}>
            {e.Name}
          </a>
        </h6>
        <p className="small text-muted">${e.Price}</p>
      </div></div>
       </>:null
        ))}
         </div>  
      </Tab>
      <Tab eventKey="General hygiene" title="General hygiene">
      <div className="row">
        {data?.map(
          (e)=>((e.idCategorie === key)?
        <><div class="col-xl-3 col-lg-4 col-sm-6">
             <div className="product text-center">
        <div className="position-relative mb-3">
          <div className="badge text-white bg-" />
          <a className="d-block" href={`/detail-product/${e._id}`}>
            <img
              className="img-fluid w-100"
              src={e.Avatar}
              alt="..."
            />
          </a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-dark" 
                  onClick={()=>dispatch(addToBasket({pro:e, quantity}))}>
                  Add to cart
                </a>
              </li>
              <li className="list-inline-item me-0">
                <a
                  className="btn btn-sm btn-outline-dark"
                  href={`/detail-product/${e._id}`}
                  
                >
                  <i className="fas fa-expand" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          {" "}
          <a className="reset-anchor" href={`/detail-product/${e._id}`}>
            {e.Name}
          </a>
        </h6>
        <p className="small text-muted">${e.Price}</p>
      </div></div>
       </>:null
        ))}
         </div>
      </Tab>
      <Tab eventKey="Brush" title="Brush">
      <div className="row">
        {data?.map(
          (e)=>((e.idCategorie === key)?
        <><div class="col-xl-3 col-lg-4 col-sm-6">
             <div className="product text-center">
        <div className="position-relative mb-3">
          <div className="badge text-white bg-" />
          <a className="d-block" href={`/detail-product/${e._id}`}>
            <img
              className="img-fluid w-100"
              src={e.Avatar}
              alt="..."
            />
          </a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
               
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-dark" 
                  onClick={()=>dispatch(addToBasket({pro:e, quantity}))}>
                  Add to cart
                </a>
              </li>
              <li className="list-inline-item me-0">
              <a
                  to={`/detail-product/${e._id}`}
                  className="product-btn"
                  
                >
                  <i className="fas fa-expand" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          {" "}
          <a className="reset-anchor"href={`/detail-product/${e._id}`}>
            {e.Name}
          </a>
        </h6>
        <p className="small text-muted">${e.Price}</p>
      </div></div>
       </>:null
        ))}
         </div>
      </Tab>
    </Tabs>
      
   
 

    </>
  )
}

export default ProductsGroupe
