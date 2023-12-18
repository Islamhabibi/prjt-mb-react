import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getcurrent, logout } from '../Redux/Action/TeamAction'
import { Link } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getcurrent())
  },[])
  const user= useSelector(state=>state.user)
  console.log(user)
  return (
    <>
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
        <i className="mdi mdi-magnify mdi-24px lh-0" />
        <input
          type="text"
          className="form-control border-0 shadow-none bg-body"
          placeholder="Search..."
          aria-label="Search..."
        />
      </div>
    </div>
    <ul className="navbar-nav flex-row align-items-center ms-auto">
    {user.FullName? <li className="nav-item">
                  <Link className="nav-link" to={'/login'} onClick={()=>dispatch(logout())}>
                      Logout
                  </Link>
                </li>:null} 
    {!user.FullName?<><li className="nav-item">
                  <Link className="nav-link" to={'/register'}>
                      Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                      Login
                  </Link>
                  </li></>:null}
                 
      <li className="nav-item lh-1 me-3">
        <a
          className="github-button"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star themeselection/materio-bootstrap-html-admin-template-free on GitHub"
        >
          Star
        </a>
      </li>
      <li className="nav-item navbar-dropdown dropdown-user dropdown">
        <a
          className="nav-link dropdown-toggle hide-arrow p-0"
          href="javascript:void(0);"
          data-bs-toggle="dropdown"
        >
          <div className="avatar avatar-online">
            <img
              src="../assets/img/avatars/1.png"
              alt=""
              className="w-px-40 h-auto rounded-circle"
            />
          </div>
        </a>
        <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
          <li>
            <a className="dropdown-item pb-2 mb-1" href="#">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2 pe-1">
                  <div className="avatar avatar-online">
                    <img
                      src="../assets/img/avatars/1.png"
                      alt=""
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-0">John Doe</h6>
                  <small className="text-muted">Admin</small>
                </div>
              </div>
            </a>
          </li>
          <li>
            <div className="dropdown-divider my-1" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-account-outline me-1 mdi-20px" />
              <span className="align-middle">My Profile</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-cog-outline me-1 mdi-20px" />
              <span className="align-middle">Settings</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span className="d-flex align-items-center align-middle">
                <i className="flex-shrink-0 mdi mdi-credit-card-outline me-1 mdi-20px" />
                <span className="flex-grow-1 align-middle ms-1">Billing</span>
                <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                  4
                </span>
              </span>
            </a>
          </li>
          <li>
            <div className="dropdown-divider my-1" />
          </li>
          <li>
            <a className="dropdown-item" href="javascript:void(0);">
              <i className="mdi mdi-power me-1 mdi-20px" />
              <span className="align-middle">Log Out</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default Navbar
