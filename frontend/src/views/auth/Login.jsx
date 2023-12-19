import React, { useState } from 'react'
import '../../assets/styles/css/pages/page-auth.css'
import logo from "../../assets/img/logo/mb-mt.png"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { LoginUser } from '../../components/Redux/Action/TeamAction'

function Login() {
  const [formData,setFormData] = useState({
    Email:'',
    Password:''
  })
  const onChange = e=>
  {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const loginTeam= ()=>{
    dispatch(LoginUser(formData,navigate))
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
        <div className="card-body mt-2">
          <h4 className="mb-2">Welcome to Materio! 👋</h4>
          <p className="mb-4">
            Please sign-in to your account and start the adventure
          </p>
             <div className="form-floating form-floating-outline mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="Email"
                placeholder="Enter your email or username"
                autofocus=""
                onChange={onChange}
              />
              <label htmlFor="email">Email or Username</label>
            </div>
            <div className="mb-3">
              <div className="form-password-toggle">
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
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  {" "}
                  Remember Me{" "}
                </label>
              </div>
              <a
                href="auth-forgot-password-basic.html"
                className="float-end mb-1"
              >
                <span>Forgot Password?</span>
              </a>
            </div>
            <div className="mb-3">
              <button
               className="btn btn-primary d-grid w-100" 
               type="submit"
               onClick={loginTeam}
               >
                Sign in
              </button>
            </div>
          <p className="text-center">
            <span>New on our platform?</span>
            <a href="auth-register-basic.html">
              <span>Create an account</span>
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

export default Login
