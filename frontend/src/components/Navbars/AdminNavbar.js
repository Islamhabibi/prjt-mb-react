import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getcurrent, logout } from '../Redux/Action/TeamAction'  
import logo from "../../assets/img/logo/mb-mt.png"   

const AdminNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   
 useEffect(()=>{
  //getcurrent
  dispatch(getcurrent()) 
 },[])
 const user= useSelector(state=>state.team.user)
   

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light p-3 border-bottom">
      <div className="container">
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          {user.FullName? 
                  <>
              <li className="nav-item">
                  <Link className="nav-link menu-link  " to={'/category-list'} >
                    All Categorys  
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link menu-link  " to={'/customer-all'} >
                  All Customers
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link menu-link  " to={'/Users'} >
                  Teams
                </Link>
                </li>
                <li>
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
                </li>
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow p-0"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    ><Link to={`/settings-user/${user._id}`}>
                      <div className="avatar avatar-online">
                        
                        <img
                          src={user.Avatar}
                          alt=""
                          className="w-px-40 h-auto rounded-circle"
                        />
                        
                      </div></Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/login'} onClick={()=>dispatch(logout(navigate))}>
                        Logout
                    </Link>
                  </li>
                </> 
                :null}    
                {!user?.FullName?
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/register'}>
                        Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/login'}>
                        Login
                    </Link>
                    </li>
                </>:null
                }
                   
                  
               
            
          
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

 
export default AdminNavbar
