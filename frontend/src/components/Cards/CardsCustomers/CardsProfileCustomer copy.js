import React, { useEffect } from 'react'
import AdminNavbar from '../../Navbars/AdminNavbar'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { GetUser } from '../../Redux/Action/CustomerAction'
import Icon from '@mdi/react'
import { mdiBadgeAccount, mdiHomeMapMarker } from '@mdi/js'
import FooterAdmin from '../../Footers/FooterAdmin'
function CardsProfileCustomer() {
    const id = useParams()
    //console.log(id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUser(id.id))
    }, [])
    const user = useSelector((state) => state.customer.customer)
    return (
        <>
            <AdminNavbar />
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
                                <div className="card-body">
                                    <div className="row">
                                        {/* Navigation */}
                                        <div className="col-12 col-md-4 mx-auto card-separator">
                                            <div className="d-flex justify-content-between flex-column mb-3 mb-md-0 pe-md-3">
                                                <ul
                                                    className="nav nav-align-left nav-pills flex-column"
                                                    role="tablist"
                                                >
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link waves-effect waves-light active"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#restock"
                                                            aria-selected="true"
                                                            role="tab"
                                                        >
                                                            <Icon path={mdiBadgeAccount} size={1} />
                                                            <span className="align-middle">Informations</span>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link waves-effect waves-light"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#shipping"
                                                            aria-selected="false"
                                                            role="tab"
                                                            tabIndex={-1}
                                                        >

                                                            <Icon path={mdiHomeMapMarker} size={1} />
                                                            <span className="align-middle">Address</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* /Navigation */}
                                        {/* Options */}
                                        <div className="col-12 col-md-8 pt-4 pt-md-0">
                                            <div className="tab-content p-0 pe-xl-0 ps-md-3">
                                                {/* Restock Tab */}
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
                                                {/* Shipping Tab */}
                                                <div className="tab-pane fade" id="shipping" role="tabpanel">
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
                                                </div>
                                            </div>
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
            <FooterAdmin />
        </>
    )
}

export default CardsProfileCustomer
