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
import { getcurrent, logout } from '../Redux/Action/CustomerAction'; 

const FrontNavbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const basket = useSelector(state=>state.product.basket)
  useEffect(()=>{
    dispatch(getcurrent())
  },[])
  const user= useSelector(state=>state.customer.customer)
  //console.log(user)
  return (
  <>
     <Navbar collapseOnSelect expand="lg" className="" >
      <Container>
        <Navbar.Brand > <Link to ={'/'}> <img src= {logo}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link ><Link to ={'/'}>Home</Link></Nav.Link>
            <NavDropdown title="Hygiene products" id="collapsible-nav-dropdown" >
              <NavDropdown.Item href={`/category-product/General hygiene`}>
                General hygiene</NavDropdown.Item>
              <NavDropdown.Item href={`/category-product/Droguerie`}>Droguerie </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Bags & Collections" id="collapsible-nav-dropdown">
              <NavDropdown.Item  href={`/category-product/Poubel  Bags`}>Poubel  Bags</NavDropdown.Item>
              <NavDropdown.Item  href={`/category-product/Trash`}>Trash</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href={`/category-product/Wiping Paper`}>Wiping Paper</Nav.Link>
            <Nav.Link  href={`/category-product/Brush`}>Brush</Nav.Link>
            <Nav.Link href="/contact-us">Contact us</Nav.Link>
          </Nav>
          <Nav>
            {!user?.LastName?
              <>
                <Nav.Link ><LoginCustomer/></Nav.Link>
              </>:null
            }
            {user?.LastName? 
              <>
                  <Nav.Link>Hello, {user.FirstName} </Nav.Link>
                  <Nav.Link  onClick={()=>dispatch(logout(navigate))}>
                    Logout
                  </Nav.Link>
              </>:null
            }
            
            <Link className="nav-link" to={'/basket'}>
              <Icon path={mdiBasket} size={1} />{basket.length}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

 
export default FrontNavbar

