import React, { useEffect, useState } from 'react'
import 'quill/dist/quill.snow.css'; // pour importer le style de Quill
import { useDispatch, useSelector } from 'react-redux';


import axios from 'axios';
import { useNavigate } from 'react-router';
import { UpdateUser, getcurrentcustomer } from '../Redux/Action/CustomerAction';
import FrontNavbar from '../Navbars/FrontNavbar';
import Form from "react-bootstrap/Form";

function UpdateProfile() {

  const dispatch = useDispatch();
  //console.log(idptd.id)
  useEffect(() => {
    dispatch(getcurrentcustomer())

  }, [])
  const data = useSelector((state) => state.customer.customer)
  console.log(data)
  const [Email,setEmail] = useState(data.Email)
  const [Adress, setAdress] = useState(data.Adress)
  const [Adress_Additional, setAdress_Additional] = useState(data.Adress_Additional)
  const [City, setCity] = useState(data.City);
  const [Country, setCountry] = useState(data.Country);
  const [Avatar, setAvatar] = useState([])
  const [LastName, setLastName ] = useState(data.LastName)
  const [FirstName, setFirstName] = useState(data.FirstName)
  const [Password, setPassword] = useState(data.Password)
  const [Phone, setPhone] = useState(data.Phone)
  const [Postal_code, setPostal_code] = useState(data.Postal_code)
  const [Social_title, setSocial_title] = useState(data.Social_title)
  console.log({ Email, Adress,City,Country,LastName,FirstName,Password,Phone,Postal_code,Social_title, Avatar } )
  const navigate = useNavigate()

  const handleChange = (value) => {

    setAdress(value);
  };

  const Updatecustomer = async () => {
    const formaData = new FormData()
    formaData.append('file', Avatar)
    formaData.append('upload_preset', 'ml_default')
    if (Avatar?.length === undefined) {
      await axios
        .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload', formaData)
        .then(
          (res) => {
            dispatch
              (UpdateUser(data._id,
                { Email, Adress,Adress_Additional,City,Country,LastName,FirstName,Password,Phone,Postal_code,Social_title, Avatar: res.data.url }, navigate
              )
              )
          }
        )
    } else {
      dispatch
        (
          UpdateUser(data._id,
            { Email, Adress,City,Country,LastName,FirstName,Password,Phone,Postal_code,Social_title, Avatar: data.Avatar }, navigate
          )
        )
    }//console.log({ Email, Adress,City,Country,LastName,FirstName,Password,Phone,Postal_code,Social_title, Avatar: data.Avatar } )
  }
  return (
    <>
      <FrontNavbar />
      <div className="container-xxl flex-grow-1 container-p-y" style={{ marginTop: "2%" }}>
        <div className="app-ecommerce-category over">
          <div className="card mb-4">
            <h4 className="card-header">Informations</h4>
            {/* Account */}
            <div className="card-body">
              <div className="d-flex align-items-start align-items-sm-center gap-4">
                <img
                  src={data.Avatar}
                  alt="user-avatar"
                  className="d-block w-px-120 h-px-120 rounded"
                  id="uploadedAvatar"
                />
                <div className="button-wrapper">
                  <label
                    htmlFor="upload"
                    className="btn btn-primary me-2 mb-3"
                    tabIndex={0}
                  >
                    <Form.Control
                      type="file"
                      accept="image/*"

                      autoFocus
                      onChange={(e) => setAvatar(e.target.files[0])}
                    />
                  </label>
                  <div className="text-muted small">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pt-2 mt-1">
            <div className="col-md-6">
                  <label className="d-block form-label">Social title</label>
                  <div className="form-check mb-2">
                    <input
                      type="radio"
                      id="Mr"
                      value="Mr"
                      name="satatus active"
                      className="form-check-input"
                      required=""
                      onChange={(e) => { setSocial_title(true) }}
                    />
                    <label className="form-check-label" for="active">Mr</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="desactive"
                      name="statuts desactive"
                      className="form-check-input"
                      value="Mrs"
                      required=""
                      defaultChecked=""
                      onChange={(e) => { setSocial_title(false) }}
                    />
                    <label className="form-check-label" for="desactive">Mrs</label>
                  </div>
                </div>
              <div className="row mt-2 gy-4">
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                    <input
                      className="form-control"
                      type="text"
                      id="FirstName"
                      name="FirstName"
                      defaultValue={data.FirstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autofocus=""
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                  <input
                      className="form-control"
                      type="text"
                      id="LastName"
                      name="LastName"
                      defaultValue={data.LastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autofocus=""
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>
                
               
                {/************(data.isEnabled === true )?(checked):(traitement2) */}
                
              </div>
              <div className="row mt-2 gy-4">
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      defaultValue={data.Email}
                      onChange={(e) => setEmail(e.target.value)}
                      autofocus=""
                    />
                    <label htmlFor="firstName">Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="Password"
                      placeholder="············"
                      aria-describedby="password"  
                      onChange={(e)=> setPassword(e.target.value)}                   
                    />
                    <label htmlFor="Password">Password</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="tel"
                      id="Phone"
                      className="form-control"
                      name="Phone"
                      defaultValue={data.Phone}
                      aria-describedby="Phone"
                      onChange={(e)=> setPhone(e.target.value)} 
                    />
                    <label htmlFor="lastName">Phone</label>
                  </div>
                </div>
               
                {/************(data.isEnabled === true )?(checked):(traitement2) */}
                
              </div>
              
            </div>
            <h5 className="card-header">Addresses</h5>
            <div className="card-body pt-2 mt-1">
           
              <div className="row mt-2 gy-4">
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                  <textarea
                    className="form-control"
                    id="Adress"
                    rows={10}
                    name="Adress"
                    defaultValue={data.Adress}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                    <label htmlFor="firstName">Adress</label>
                  </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                  <textarea
                    className="form-control"
                    id="Adress_Additional"
                    rows={10}
                    name="Adress_Additional"
                    defaultValue={data.Adress_Additional}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                    <label htmlFor="firstName">Adress Additional</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                  <input
                      className="form-control"
                      type="text"
                      id="Country"
                      name="Country"
                      defaultValue={data.Country}
                      onChange={(e) => setCountry(e.target.value)}
                      autofocus=""
                    />
                    <label htmlFor="lastName">Country</label>
                  </div>
                </div>                
              </div>
              <div className="row mt-2 gy-4">
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                  <input
                      className="form-control"
                      type="text"
                      id="City"
                      name="City"
                      defaultValue={data.City}
                      onChange={(e) => setCity(e.target.value)}
                      autofocus=""
                    />
                    <label htmlFor="firstName">City</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-outline">
                  <input
                      className="form-control"
                      type="number"
                      id="Postal_code"
                      name="Postal_code"
                      defaultValue={data.Postal_code}
                      onChange={(e) => setPostal_code(e.target.value)}
                      autofocus=""
                    />
                    <label htmlFor="lastName">Postal code</label>
                  </div>
                </div>
                
               
                {/************(data.isEnabled === true )?(checked):(traitement2) */}
                
              </div>
              
              <div className="mt-4">
                <button onClick={Updatecustomer} type="submit" className="btn btn-primary me-2">
                  Save changes
                </button>
                <a type="reset" className="btn btn-outline-secondary"
                  href={'/admin/category-list'}
                >
                  Reset
                </a>
              </div>
            </div>
            {/* /Account */}
          </div>
         
        </div>

      </div>
    </>
  )
}

export default UpdateProfile


