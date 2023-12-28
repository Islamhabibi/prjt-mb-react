import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { RegisterCustomer } from '../../components/Redux/Action/CustomerAction';

function Registercustomer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: ''
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  //console.log(formData)
  //function pour dispatche la fct dans l'actionteam
  const Registeruser = () => {
    dispatch(RegisterCustomer(formData, navigate))
    handleClose()
  }
  return (
    <>
      <span onClick={handleShow}> No account? Create one here ?   </span>
      <Modal show={show} onHide={handleClose}>
        <div className="modal-dialog modal-lg modal-simple modal-edit-user">
          <div className="modal-content p-3 p-md-5">
            <div className="modal-body py-3 py-md-0">
              <Modal.Header closeButton>
                <div className="text-center mb-4">
                  <Modal.Title>
                    <h4 className="mb-2"> New account register </h4>
                  </Modal.Title>
                </div>
              </Modal.Header>
              <Modal.Body>
                <Form className="row g-4 fv-plugins-bootstrap5 fv-plugins-framework">
                  <div className="col-12 fv-plugins-icon-container">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        id="FirstName"
                        name="FirstName"
                        className="form-control"
                        placeholder="john.doe.007"
                        onChange={onChange}
                      />
                      <label htmlFor="modalEditFirstName">First Name</label>
                    </div>
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                  </div>
                  <div className="col-12 fv-plugins-icon-container">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        id="LastName"
                        name="LastName"
                        className="form-control"
                        placeholder="john.doe.007"
                        onChange={onChange}
                      />
                      <label htmlFor="LastName">Last Name</label>
                    </div>
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                  </div>
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
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="btn btn-outline-secondary waves-effect" variant="secondary"
                  onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={Registeruser}
                  className="btn btn-primary me-sm-3 me-1 waves-effect waves-light"
                >
                  Create an Account
                </Button>
              </Modal.Footer>
            </div>
          </div>
        </div>
      </Modal>
    </>

  )
}

export default Registercustomer
