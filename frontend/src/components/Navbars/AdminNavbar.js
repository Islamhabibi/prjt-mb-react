import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { mdiBasket } from '@mdi/js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '@mdi/react';
import logo from "../../assets/img/logo/mb-mt.png"
import LoginCustomer from '../../views/Customer/LoginCustomer';
import { getcurrent, logout } from '../Redux/Action/TeamAction';

const AdminNavbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getcurrent())
  }, [])
  const user = useSelector(state => state.team.user)
  //console.log(user)
  return (
    <>
      <div className="container-fluid ">
        
      <Navbar collapseOnSelect expand="lg" className="" >
        <Container>
          <Navbar.Brand ><Link to={'/admin'}> <img src={logo} /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="/admin/category-list">Category</Nav.Link>
              <NavDropdown title="Product" id="collapsible-nav-dropdown">
                <NavDropdown.Item href={`/admin/product-list`}>Product List</NavDropdown.Item>
                <NavDropdown.Item href={`/admin/add-product`}>Add Product</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={`/admin/all-customer`}>All Customer</Nav.Link>
              <Nav.Link href={`/admin/all-team`}>List Useres</Nav.Link>

            </Nav>
            <Nav>
              {user.FullName ?
                <>
                  <li className="nav-item lh-1 me-3 nav-link">
                    <a
                      className="github-button"
                      data-icon="octicon-star"
                      data-size="large"                      
                      href={'/admin/profil'}
                    >
                      {user.FullName}
                    </a>
                  </li>
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow p-0"
                      href={'/admin/profil'}

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
                  <Nav.Link onClick={() => dispatch(logout(navigate))}>
                    Logout
                  </Nav.Link>
                  </li>
                 
                </>
                : null}
              
              
               {user?.FullName?null:
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
                </> 
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
       
    </>
  );
};


export default AdminNavbar
