import React from 'react'
import { mdiAccount, mdiBasket } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LoginUser } from '../../components/Redux/Action/CustomerAction';
import { Link } from 'react-router-dom';
import Registercustomer from './Registercustomer';
function LoginCustomer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    
    Email: '',
    Password: ''
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(formData)
  //function pour dispatche la fct dans l'actionteam
  const loginUser = () => {
    dispatch(LoginUser(formData,navigate))
   
    handleClose()
  }
  return (
    <>
      <span><Icon onClick={handleShow} path={mdiAccount} size={1} /></span>
      <Modal show={show} onHide={handleClose}>
        <div className="modal-dialog modal-lg modal-simple modal-edit-user">
          <div className="modal-content p-3 p-md-5">
            <div className="modal-body py-3 py-md-0">
              <Modal.Header closeButton>
                <div className="text-center mb-4">
                  <Modal.Title>
                    <h4 className="mb-2">Login to your account</h4>
                  </Modal.Title>
                </div>
              </Modal.Header>
              <Modal.Body>
                <Form className="row g-4 fv-plugins-bootstrap5 fv-plugins-framework">
                   
                  
                  <div className="col-12 fv-plugins-icon-container">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="email"
                        id="Email"
                        name="Email"
                        className="form-control"
                        placeholder="john@gmail.com"
                        onChange={onChange}
                      />
                      <label htmlFor="LastName">Email</label>
                    </div>
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                  </div>
                  <div className="col-12 fv-plugins-icon-container">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="password"
                        id="Password"
                        name="Password"
                        className="form-control"
                        placeholder="............."
                        onChange={onChange}
                      />
                      <label htmlFor="Password">Password</label>
                    </div>
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                  </div>
                  <p className="text-center">
                    <span >
                     <Registercustomer  /></span>
                  </p>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="btn btn-outline-secondary waves-effect"
                  variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={loginUser}
                  className="btn btn-primary me-sm-3 me-1 waves-effect waves-light"
                >
                  Login
                </Button>
              </Modal.Footer>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default LoginCustomer
