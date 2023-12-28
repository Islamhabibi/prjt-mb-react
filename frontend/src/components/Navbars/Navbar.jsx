import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getcurrent, logout } from '../Redux/Action/TeamAction'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo/mb-mt.png"   
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar = ({ selectedItem, onItemClick }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getcurrent())
  },[])
  const user= useSelector(state=>state.team.user)
  //console.log(user)
  return (
    <>
    <div className="container-xxl d-flex h-100">
      <a href="#" className="menu-horizontal-prev d-none" />
      <div className="menu-horizontal-wrapper">
      <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar">
  <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
      <i className="mdi mdi-menu mdi-24px" />
    </a>
  </div>
  <div
    className="navbar-nav-right d-flex align-items-center"
    id="navbar-collapse"
  >
    <Link to="/" className="navbar-brand">
        <img
              src= {logo}
              alt="auth-tree"
              className="app-brand-logo demo"
            /> 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    <ul className="navbar-nav flex-row align-items-center ms-auto">
       
    <li className="nav-item">
        <Link className="nav-link menu-link  " to={'/admin/dashboard'} >
          Category  
        </Link>
      </li>
    <li className="nav-item">
        <Link className="nav-link menu-link  " to={'/admin/customer-all'} >
          All Customers
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link menu-link  " to={'/admin/Users'} >
          Teams
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link menu-link  " to={'/admin/product-list'} >
          Product
        </Link>
      </li>
      <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
      <>
    {user.FullName? 
    <>
      
      <li className="nav-item lh-1 me-3">
      <a
        className="github-button"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star themeselection/materio-bootstrap-html-admin-template-free on GitHub"
      >
       {user.FullName}
      </a>
    </li>
    <li className="nav-item navbar-dropdown dropdown-user dropdown">
        <a
          className="nav-link dropdown-toggle hide-arrow p-0"
          href="#"
         
        >
          <div className="avatar avatar-online">
            <img
              src={user.Avatar}
              alt=""
              className="w-px-40 h-auto rounded-circle"
            />
          </div>
        </a>
        
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/auth/login'} onClick={()=>dispatch(logout(navigate))}>
            Logout
        </Link>
      </li>
    </>
    :null} 
    {!user?.FullName?
    <>
      <li className="nav-item">
        <Link className="nav-link" to={'/auth/register'}>
            Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/auth/login'}>
            Login
        </Link>
        </li>
    </>:null
    }
                 
                 </>
      
    </ul>
    <div className="navbar-nav align-items-center">
      <div className="nav-item d-flex align-items-center">
        <i className="mdi mdi-magnify mdi-24px lh-0" />
        <input
          type="text"
          className="form-control border-0 shadow-none bg-body"
          placeholder="Search..."
          aria-label="Search..."
        />
      </div>
    </div>
  </div>
</nav></div></div>

    </>
  )
}

export default Navbar
