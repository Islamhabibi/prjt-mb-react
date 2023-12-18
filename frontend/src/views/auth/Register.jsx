import React, { useState } from 'react'
import '../../assets/styles/css/pages/page-auth.css'
import logo from "../../assets/img/logo/mb-mt.png"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RegisterTeam } from '../../components/Redux/Action/TeamAction'
function Register() {
  const [formData, setFormData] = useState({
    FullName: '',
    UserName:'',
    Email: '',
    Password: '',
    
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //distraction de la data 
  
  console.log(formData)
const onChange = e =>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
//function pour dispatche la fct dans l'actionteam
const Adduserteam =()=>
{
  dispatch(RegisterTeam(formData,navigate))
  console.log(formData)
}
  return (
    <>
    <div className="position-relative">
    <div className="authentication-wrapper authentication-basic container-p-y">
    <div className="authentication-inner py-4">
      <div className="card p-2">
        <div className="app-brand justify-content-center mt-5">
          <a href="index.html" className="app-brand-link gap-2">
            <img
              src= {logo}
              alt="auth-tree"
              className="app-brand-logo demo"
            />
          </a>
        </div>
    {/*formaulaire */}
    <div className="card-body mt-2">
  <h4 className="mb-2">Adventure starts here 🚀</h4>
  <p className="mb-4">Make your app management easy and fun!</p>
  <div className="form-floating form-floating-outline mb-3">
      <input
        type="text"
        className="form-control"
        id="FullName"
        name="FullName"
        placeholder="Enter your FullName"
        autofocus=""
        onChange={onChange}
      />
      <label htmlFor="FullName">FullName</label>
    </div>
    <div className="form-floating form-floating-outline mb-3">
      <input
        type="text"
        className="form-control"
        id="username"
        name="UserName"
        placeholder="Enter your username"
        autofocus=""
        onChange={onChange}
      />
      <label htmlFor="username">Username</label>
    </div>
    <div className="form-floating form-floating-outline mb-3">
      <input 
        type="text" 
        id="Phone" 
        name="Phone" 
        class="form-control phone-number-mask" 
        placeholder="202 555 0111"
        
      />
      <label  for="modalEditUserPhone">Phone Number</label>
    </div>
    <div className="form-floating form-floating-outline mb-3">
      <input
        type="text"
        className="form-control"
        id="email"
        name="Email"
        placeholder="Enter your email"
        onChange={onChange}
      />
      <label htmlFor="email">Email</label>
    </div>
    <div className="mb-3 form-password-toggle">
      <div className="input-group input-group-merge">
        <div className="form-floating form-floating-outline">
          <input
            type="password"
            id="password"
            className="form-control"
            name="Password"
            placeholder="············"
            aria-describedby="password"
            onChange={onChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <span className="input-group-text cursor-pointer">
          <i className="mdi mdi-eye-off-outline" />
        </span>
      </div>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="terms-conditions"
          name="terms"
        />
        <label className="form-check-label" htmlFor="terms-conditions">
          I agree to
          <a href="javascript:void(0);">privacy policy &amp; terms</a>
        </label>
      </div>
    </div>
    <button className="btn btn-primary d-grid w-100" onClick={Adduserteam}>Sign up</button>
  <p className="text-center">
    <span>Already have an account?</span>
    <a href="auth-login-basic.html">
      <span>Sign in instead</span>
    </a>
  </p>
</div>
  </div>
  
</div>
</div>
</div>


</>
  )
}

export default Register
