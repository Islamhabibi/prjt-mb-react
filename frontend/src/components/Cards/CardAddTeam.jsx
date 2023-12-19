import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { RegisterTeam } from '../Redux/Action/TeamAction';

function CardAddTeam() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({
        FullName: '',
        UserName: '',
        Email: '',
        Password: '',
        Phone: 0

    });
    const [Profile, setProfile] = useState('')
    const [isEnabled, setIsEnabled] = useState('')
    //console.log(isEnabled)
   // console.log(formData)
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    //function pour dispatche la fct dans l'actionteam
    const Adduserteam = () => {
        dispatch(RegisterTeam(formData, Profile, isEnabled, navigate))
        //console.log(formData)
        handleClose()
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New User
            </Button>


            <Modal show={show} onHide={handleClose} className='offcanvas offcanvas-end'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 id="offcanvasAddUserLabel" className="offcanvas-title">
                            Add User
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <Form>
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <input
                                type="text"
                                className="form-control"
                                id="add-user-fullname"
                                placeholder="John Doe"
                                name="FullName"
                                aria-label="John Doe"
                                onChange={onChange}
                            />
                            <label htmlFor="add-user-fullname">Full Name</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <input
                                type="text"
                                className="form-control"
                                id="add-user-Username"
                                placeholder="User Name"
                                name="UserName"
                                aria-label="John Doe"
                                onChange={onChange}
                            />
                            <label htmlFor="add-user-Username">UserName</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <input
                                type="text"
                                id="phoneNumber"
                                name="Phone"
                                className="form-control"
                                placeholder='21 111 111'
                                aria-label="John Doe"
                                onChange={onChange}
                            />
                            <label htmlFor="add-user-Username">Phone Number</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <input
                                type="email"
                                id="email"
                                name="Email"
                                className="form-control"
                                placeholder='21 111 111'
                                onChange={onChange}
                            />
                            <label htmlFor="add-user-Username">Email</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <input
                                type="password"
                                id="password"
                                name="Password"
                                className="form-control"
                                placeholder='.........'
                                onChange={onChange}
                            />
                            <label htmlFor="add-user-Username">Password</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <select
                                className="select2 form-select"
                                id="userRole"
                                name="userRole"
                                onChange={(e) => setProfile(e.target.value)}
                            >
                                <option value="">Profile</option>
                                <option value="Admin">Admin</option>
                                <option value="SuperAdmin">Super Admin</option>
                            </select>
                            <label htmlFor="add-user-Username">Profile</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <div class="form-check mb-2">

                                <input
                                    type="radio"
                                    id="active"
                                    name="true"
                                    className="form-check-input"
                                    required=""
                                    //defaultChecked={(data.isEnabled)===true ? "Checked" : ""}
                                    onChange={(e) => { setIsEnabled(true) }}
                                />
                                <label class="form-check-label" for="active">Active</label>
                            </div>
                            <div class="form-check">
                                <input
                                    type="radio"
                                    id="desactive"
                                    name="false"
                                    class="form-check-input"
                                    value="inactive"
                                    required=""
                                    defaultChecked=""
                                    onChange={(e) => { setIsEnabled(false) }}
                                />
                                <label class="form-check-label" for="desactive">Desactive</label>
                            </div>

                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Adduserteam}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CardAddTeam
