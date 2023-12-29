import React, { useEffect } from 'react'
 import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { GetUser,getcurrentcustomer } from '../../components/Redux/Action/CustomerAction'
import Icon from '@mdi/react'
import { mdiBadgeAccount, mdiHomeMapMarker } from '@mdi/js'
 import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
 import FrontNavbar from '../../components/Navbars/FrontNavbar'
import FooterCustomer from '../Footers/FooterCustomer'
function ProfileCustomer() {
    const id = useParams()
    //console.log(id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUser(id.id))
        dispatch(getcurrentcustomer())
        
    }, [])
    const user = useSelector((state) => state.customer.customer)
    const admin = useSelector((state)=> state.team.user)
    //console.log(user)
    return (
        <>
            
            <FrontNavbar/>             
            
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="py-3 mb-4">

                </h4>
                <div className="row">
                    {/* About User */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="user-avatar-section">
                                <div className=" d-flex align-items-center flex-column">
                                    <img
                                        className="img-fluid rounded mb-3 mt-4"
                                        src={user.Avatar}
                                        height={120}
                                        width={120}
                                        alt="User avatar"
                                    />
                                    <div className="user-info text-center">
                                        <h4>{user.FullName}</h4>
                                        <span className="badge bg-label-danger rounded-pill">
                                            {user.Profile}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h5 className="pb-3 border-bottom mb-3"></h5>
                            <div className="info-container">

                                <div className="card-header">
                                    <h5 className="card-title mb-0">Information customer</h5>
                                </div>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={3} className=' card-separator'>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first" className='align-middle'>
                                                        <Icon path={mdiBadgeAccount} size={1} />
                                                        Informations</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second" className='align-middle' >
                                                        <Icon path={mdiHomeMapMarker} size={1} />
                                                        Adress</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <div
                                                        className="tab-pane fade active show"
                                                        id="restock"
                                                        role="tabpanel"
                                                    >
                                                        <h6 className="text-body">Details</h6>
                                                        {/*informations*/}
                                                        <div className="row mb-3 g-3">
                                                            <ul className="list-unstyled mb-4">
                                                                <li className="mb-3">
                                                                    <span className="h6">Civil status: </span>
                                                                    <span> {user.Social_title}</span>
                                                                </li>
                                                                <li className="mb-3">
                                                                    <span className="h6">First Name: </span>
                                                                    <span>{user.FirstName}</span>
                                                                </li>
                                                                <li className="mb-3">
                                                                    <span className="h6">First Last: </span>
                                                                    <span>{user.LastName}</span>
                                                                </li>
                                                                <li className="mb-3">
                                                                    <span className="h6">Phone: </span>
                                                                    <span>(+216) {user.Phone}</span>
                                                                </li>
                                                                <li className="mb-3">
                                                                    <span className="h6">Email: </span>
                                                                    <span> {user.Email}</span>
                                                                </li>
                                                                <li className="mb-3">
                                                                    <span className="h6">Status: </span>
                                                                    {(user.isEnabled) ?
                                                                        (<span
                                                                            className="badge rounded-pill bg-label-success"
                                                                            text-capitalized=""
                                                                        >
                                                                            Active
                                                                        </span>)
                                                                        :
                                                                        <span className="badge rounded-pill bg-label-secondary"
                                                                            text-capitalized=""
                                                                        >
                                                                            Inactive</span>
                                                                    }
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">

                                                    <h6 className="text-body">Addresses</h6>
                                                    <div>
                                                        <div className="form-check list-unstyled mb-3">
                                                            <li className="mb-3">
                                                                <span className="h6"> Address: </span>
                                                                <span> {user.Adress}</span>
                                                            </li>
                                                            <li className="mb-3">
                                                                <span className="h6"> City: </span>
                                                                <span> {user.City}</span>
                                                            </li>
                                                            <li className="mb-3">
                                                                <span className="h6"> Country: </span>
                                                                <span> {user.Country}</span>
                                                            </li>
                                                            <li className="mb-3">
                                                                <span className="h6"> Postal code: </span>
                                                                <span> {user.Postal_code}</span>
                                                            </li>
                                                        </div>
                                                    </div>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                                {(admin?.Profile === "SuperAdmin")|| (admin?.Profile ==='Admin')?null:
                                 <div>

                                 <button
                                     className="btn btn-primary waves-effect waves-light"
                                     data-repeater-create=""
                                 >
                                     Edit your Profile
                                 </button>
                             </div>}
                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <FooterCustomer />
        </>
    )
}

export default ProfileCustomer
