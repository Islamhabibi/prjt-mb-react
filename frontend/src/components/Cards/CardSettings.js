import React, { Profiler, useEffect, useState } from 'react'
import useravatar from '../../assets/img/avatars/1.png'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser, UpdateUser } from '../Redux/Action/TeamAction'
import Form from "react-bootstrap/Form";
import axios from 'axios'
function CardSettings({ data }) {
  const [FullName, setFullName] = useState(data.FullName);
  const [UserName, setUserName] = useState(data.UserName)
  const [Password,setPassword]= useState(data.Password)
  const [Email,setEmail]= useState(data.Email)
  const [Phone,setPhone]= useState(data.Phone)
  const [Avatar,setAvatar] = useState([])
  const [isEnabled,setIsEnabled]= useState(data.isEnabled)
  const [Profile, setProfile] = useState(data.Profile);

  const navigate = useNavigate()

//fin modification statut

  const handleChangeprofile = (e) => {
    setProfile(e.target.value);
  };
  const dispatch = useDispatch();

  const Update = async () => {
    const formaData=new FormData()
    formaData.append('file',Avatar)
    formaData.append('upload_preset','ml_default')
    if(Avatar.length===undefined){
    await axios
    .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload',formaData)
    .then(res=> 
         dispatch
          (UpdateUser(data._id,
            {FullName,UserName,Email,Password,Phone,Profile,isEnabled,Avatar:res.data.url},navigate
            )
          )
        
        )
        
      }else{
            dispatch
            (UpdateUser(data._id,
                {FullName,UserName,Email,Password,Phone,Profile,isEnabled,Avatar:data.image}
                )
            ); 
            }
  };
   return (
    <>
       
        {/*<h4 className="py-3 mb-4">
          <span className="text-muted fw-light">Account Settings /</span> Account
        </h4>
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-pills flex-column flex-md-row mb-4 gap-2 gap-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="javascript:void(0);">
                  <i className="mdi mdi-account-outline mdi-20px me-1" />
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages-account-settings-notifications.html"
                >
                  <i className="mdi mdi-bell-outline mdi-20px me-1" />
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pages-account-settings-connections.html"
                >
                  <i className="mdi mdi-link mdi-20px me-1" />
                  Connections
                </a>
              </li>
            </ul>*/}
            <div className="card mb-4">
              <h4 className="card-header">Profile Details</h4>
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
                      <span className="d-none d-sm-block">Upload new photo</span>
                      <i className="mdi mdi-tray-arrow-up d-block d-sm-none" />
                      <Form.Control
                        type="file"
                        accept="image/*"
                      
                        autoFocus
                        onChange={(e) => setAvatar(e.target.files[0])}
                      />
                    </label>
                    <button
                      type="button"
                      className="btn btn-outline-danger account-image-reset mb-3"
                    >
                      <i className="mdi mdi-reload d-block d-sm-none" />
                      <span className="d-none d-sm-block">Reset</span>
                    </button>
                    <div className="text-muted small">
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-2 mt-1">
                   <div className="row mt-2 gy-4">
                    <div className="col-md-6">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="FullName"
                          name="FullName"
                          defaultValue={data.FullName}
                          onChange={(e)=>setFullName(e.target.value)}
                          autofocus=""
                        />
                        <label htmlFor="firstName">Full Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          name="UserName"
                          id="UserName"
                          defaultValue={data.UserName}
                          onChange={(e)=>setUserName(e.target.value)}
                        />
                        <label htmlFor="lastName">UserName</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group input-group-merge">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="form-control"
                            placeholder='21 111 111'
                            defaultValue={data.Phone}
                            onChange={(e)=>setPhone(e.target.value)}
                          />
                          <label htmlFor="phoneNumber">Phone Number</label>
                        </div>
                        <span className="input-group-text">TUS (+216)</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          defaultValue={data.Email}
                          placeholder="john.doe@example.com"
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                        <label htmlFor="email">E-mail</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="password"
                          id="Password"
                          name="Password"
                          placeholder=".........."
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                        <label htmlFor="state">Password</label>
                      </div>
                    </div>   
                   <div className="col-md-6">
                      <div className="form-floating form-floating-outline">
                        <select 
                          className="select2 form-select"
                          id="userRole"
                          name="userRole"
                          value={data.Profile}
                          onChange={handleChangeprofile}>
                          <option value="">{data.Profile}</option>
                          <option value="Admin">Admin</option>
                          <option value="SuperAdmin">Super Admin</option>
                        </select>
                        <label htmlFor="language">Profile</label>
                      </div>
                    </div>
                    {/************(data.isEnabled === true )?(checked):(traitement2) */}
                    <div class="col-md-6">
                      <label class="d-block form-label">Statut</label>
                      <div class="form-check mb-2">
                         
                          <input
                            type="radio"
                            id="active"
                            name="satatus active"
                            className="form-check-input"
                            required=""
                            //defaultChecked={(data.isEnabled)===true ? "Checked" : ""}
                            onChange={(e)=>{ setIsEnabled(true)}}
                          />
                        <label class="form-check-label" for="active">Active</label>
                      </div>
                      <div class="form-check">
                        <input 
                          type="radio" 
                          id="desactive" 
                          name="statuts desactive" 
                          class="form-check-input" 
                          value="inactive"
                          required=""
                          defaultChecked=""
                          onChange={(e)=>setIsEnabled(false)}/>
                        <label class="form-check-label" for="desactive">Desactive</label>
                      </div>
                    </div>
                    {/*(data.isEnabled)?(traitement1):(traitement2)
                (<label class="switch switch-primary">
                        <input type="checkbox" class="switch-input" required=""/>
                        <span class="switch-toggle-slider">
                          <span class="switch-on"></span>
                          <span class="switch-off"></span>
                        </span>
                        <span class="switch-label">User desactive</span>
                      </label>)
                      :
                      <label class="switch switch-primary">
                      <input type="checkbox" class="switch-input" required=""/>
                      <span class="switch-toggle-slider">
                        <span class="switch-on"></span>
                        <span class="switch-off"></span>
                      </span>
                      <span class="switch-label">User active</span>
                    </label>}
                  </div>
                   {/************ */} 
                     
                  </div>
                  <div className="mt-4">
                    <button onClick={Update} type="submit" className="btn btn-primary me-2">
                      Save changes
                    </button>
                    <button type="reset" className="btn btn-outline-secondary">
                      Reset
                    </button>
                  </div>
              </div>
              {/* /Account */}
            </div>
            <div className="card">
              <h5 className="card-header fw-normal">Delete Account</h5>
              <div className="card-body">
                <div className="mb-3 col-12 mb-0">
                  <div className="alert alert-warning">
                    <h6 className="alert-heading mb-1">
                      Are you sure you want to delete your account?
                    </h6>
                    <p className="mb-0">
                      Once you delete your account, there is no going back. Please be
                      certain.
                    </p>
                  </div>
                </div>
                   <div className="form-check mb-3 ms-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="accountActivation"
                      id="accountActivation"
                    />
                    <label className="form-check-label" htmlFor="accountActivation">
                      I confirm my account deactivation
                    </label>
                  </div>
                  <button type="submit" className="btn btn-danger" 
                    onClick={()=>dispatch(DeleteUser(data._id),navigate("/dashboard"))}>
                    Deactivate Account
                  </button>
              </div>
            </div>
           
         
       

    </>
  )
}

export default CardSettings
