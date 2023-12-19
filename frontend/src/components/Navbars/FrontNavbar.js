import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getcurrent, logout } from '../Redux/Action/TeamAction'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo/mb-mt.png"
import Icon from '@mdi/react';
import { mdiAccount, mdiBasket, mdiLeadPencil } from '@mdi/js'
import Registercustomer from '../../views/Customer/Registercustomer'
import LoginCustomer from '../../views/Customer/LoginCustomer'
function FrontNavbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getcurrent())
  },[])
  const user= useSelector(state=>state.team.user)
  console.log(user)
  return (
    
     <nav
  className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
  id="layout-navbar"
>
  <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
      <i className="mdi mdi-menu mdi-24px" />
    </a>
  </div>
  <div
    className="navbar-nav-right d-flex align-items-center"
    id="navbar-collapse"
  >
    <div className="navbar-nav align-items-center">
      <div className="nav-item d-flex align-items-center">
      <img
              src= {logo}
              alt="auth-tree"
              className="app-brand-logo demo"
            />
      </div>
    </div>
       
      <div className="collapse navbar-collapse" id="navbar-ex-3">
      <div className="navbar-nav me-auto">
        <a className="nav-item nav-link active" href="javascript:void(0)">
          Home
        </a>
        <a className="nav-item nav-link" href="javascript:void(0)">
          About
        </a>
        <a className="nav-item nav-link" href="javascript:void(0)">
          Contact
        </a>
      </div>
      <LoginCustomer/>
        
      <span> <Icon path={mdiBasket} size={1} /></span>
       
    </div>
     </div>
     </nav>
    
   )
}

 

 
 export default FrontNavbar
 