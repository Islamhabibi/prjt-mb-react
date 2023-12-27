import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToBasket } from '../Redux/Action/ProductAction';
function AddCart({data}) {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const dispatch = useDispatch()
    
    const [quantity, setQuantity] = useState(1)
  return (
    <>
             
              <a className="product-btn"  onClick={() => setLgShow(true)}
              >
                  <i className="fas fa-dolly-flatbed" />
                </a>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <h4 className="modal-title h6 text-sm-center modal-xl" id="myModalLabel">
       Produit ajouté avec succès à votre panier
    </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
<div className="d-flex flex-column flex-lg-row align-items-center py-5">
<div className="d-flex flex-column flex-lg-row align-items-center py-5">
  <div className="position-relative bg-white mb-4 mb-lg-0">
    <img
      className="img-fluid d-block mx-auto"
      src="https://d19m59y37dris4.cloudfront.net/shirt/3-0/img/f-shirt-cyan.17a21f0f.jpg"
      alt="shirt"
      width={400}
    />
    
  </div>
  <div className="ms-lg-5 text-center text-lg-start">
    <p className="h4 text-primary">
      {" "}
      <sup>$ </sup>70.00
    </p>
    <h2 id="productModalLabel">Beautiful Cyan</h2>
    <p className="lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore
    </p>
    <ul className="list-inline d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start flex-wrap text-center text-sm-start">
      <li className="list-inline-item">
        <div
          className="choices"
          data-type="select-one"
          tabIndex={0}
          role="listbox"
          aria-haspopup="true"
          aria-expanded="false"
        >
          
         
        </div>
      </li>
      
    </ul>
   
  </div>
</div>

</div>
   
 

        </Modal.Body>
        <Modal.Footer>
        <a className="btn btn-primary col-5" href="#" style={{margin:'2rem'}}>
      Continue shopping 
    </a>

    <a className="btn btn-primary col-5" href={'/cart'} onClick={()=>dispatch(addToBasket({pro:data, quantity}))}>
      Procceed to checkout 
    </a>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCart
