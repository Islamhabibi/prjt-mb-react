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
                                    {/* Global Delivery Tab */}
                                    <div className="tab-pane fade" id="global-delivery" role="tabpanel">
                                        <h6 className="text-body">Global Delivery</h6>
                                        {/* Worldwide delivery */}
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="globalDel"
                                                id="worldwide"
                                            />
                                            <label className="form-check-label" htmlFor="worldwide">
                                                <span className="h6">Worldwide delivery</span>
                                                <br />
                                                <small className="text-muted">
                                                    Only available with Shipping method:
                                                    <a href="javascript:void(0);">Fulfilled by Company name</a>
                                                </small>
                                            </label>
                                        </div>
                                        {/* Global delivery */}
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="globalDel"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label w-75 pe-5 mb-2"
                                                htmlFor="country-selected"
                                            >
                                                <span className="h6">Selected Countries</span>
                                            </label>
                                            <div className="form-floating form-floating-outline">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Type Country name"
                                                    id="country-selected"
                                                />
                                                <label htmlFor="ecommerce-product-name">Countries</label>
                                            </div>
                                        </div>
                                        {/* Local delivery */}
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="globalDel"
                                                id="local"
                                            />
                                            <label className="form-check-label" htmlFor="local">
                                                <span className="h6">Local delivery</span>
                                                <br />
                                                <small className="text-muted">
                                                    Deliver to your country of residence :
                                                    <a href="javascript:void(0);">Change profile address</a>
                                                </small>
                                            </label>
                                        </div>
                                    </div>
                                    {/* Attributes Tab */}
                                    <div className="tab-pane fade" id="attributes" role="tabpanel">
                                        <h6 className="text-body">Attributes</h6>
                                        <div>
                                            {/* Fragile Product */}
                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue="fragile"
                                                    id="fragile"
                                                />
                                                <label className="form-check-label" htmlFor="fragile">
                                                    <span className="h6">Fragile Product</span>
                                                </label>
                                            </div>
                                            {/* Biodegradable */}
                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue="biodegradable"
                                                    id="biodegradable"
                                                />
                                                <label className="form-check-label" htmlFor="biodegradable">
                                                    <span className="h6">Biodegradable</span>
                                                </label>
                                            </div>
                                            {/* Frozen Product */}
                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="frozen"
                                                    defaultValue="frozen"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label w-75 pe-5 mb-2"
                                                    htmlFor="frozen"
                                                >
                                                    <span className="h6">Frozen Product</span>
                                                </label>
                                                <div className="form-floating form-floating-outline">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="In Celsius"
                                                        id="temp"
                                                    />
                                                    <label htmlFor="temp">Max. allowed Temperature</label>
                                                </div>
                                            </div>
                                            {/* Exp Date */}
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue="expDate"
                                                    id="expDate"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label w-75 pe-5 mb-2"
                                                    htmlFor="expDate"
                                                >
                                                    <span className="h6">Expiry Date of Product</span>
                                                </label>
                                                <div className="form-floating form-floating-outline">
                                                    <input
                                                        type="text"
                                                        className="product-date form-control flatpickr-input"
                                                        id="flatpickr-date"
                                                        readOnly="readonly"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Attributes Tab */}
                                    {/* Advanced Tab */}
                                    <div className="tab-pane fade" id="advanced" role="tabpanel">
                                        <h6 className="text-body">Advanced</h6>
                                        <div className="row">
                                            {/* Product Id Type */}
                                            <div className="col">
                                                <h6 className="mb-2">Product ID Type</h6>
                                                <div className="form-floating form-floating-outline form-floating-select2">
                                                    <div className="position-relative">
                                                        <select
                                                            id="product-id"
                                                            className="select2 form-select select2-hidden-accessible"
                                                            data-placeholder="ISBN"
                                                            data-allow-clear="true"
                                                            data-select2-id="product-id"
                                                            tabIndex={-1}
                                                            aria-hidden="true"
                                                        >
                                                            <option value="" data-select2-id={4}>
                                                                ISBN
                                                            </option>
                                                            <option value="ISBN">ISBN</option>
                                                            <option value="UPC">UPC</option>
                                                            <option value="EAN">EAN</option>
                                                            <option value="JAN">JAN</option>
                                                        </select>
                                                        <span
                                                            className="select2 select2-container select2-container--default"
                                                            dir="ltr"
                                                            data-select2-id={3}
                                                            style={{ width: "auto" }}
                                                        >
                                                            <span className="selection">
                                                                <span
                                                                    className="select2-selection select2-selection--single"
                                                                    role="combobox"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    tabIndex={0}
                                                                    aria-disabled="false"
                                                                    aria-labelledby="select2-product-id-container"
                                                                >
                                                                    <span
                                                                        className="select2-selection__rendered"
                                                                        id="select2-product-id-container"
                                                                        role="textbox"
                                                                        aria-readonly="true"
                                                                    >
                                                                        <span className="select2-selection__placeholder">
                                                                            ISBN
                                                                        </span>
                                                                    </span>
                                                                    <span
                                                                        className="select2-selection__arrow"
                                                                        role="presentation"
                                                                    >
                                                                        <b role="presentation" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="dropdown-wrapper" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <label htmlFor="product-id">Id</label>
                                                </div>
                                            </div>
                                            {/* Product Id */}
                                            <div className="col">
                                                <h6 className="mb-2">Product ID</h6>
                                                <div className="form-floating form-floating-outline">
                                                    <input
                                                        type="number"
                                                        id="product-id-1"
                                                        className="form-control"
                                                        placeholder="ISBN Number"
                                                    />
                                                    <label htmlFor="product-id-1">Id Number</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Advanced Tab */}
                                </div>
                            </div>
                            {/* /Options*/}
                        </div>
                    </div>
                
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/** */}
                

                {/** */}
            </div>
<FooterAdmin/>
        </>
    )
}

export default CardsProfileCustomer
