import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getcurrent, logout } from '../Redux/Action/TeamAction'  
import logo from "../../assets/img/logo/mb-mt.png"   
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { mdiBasket } from '@mdi/js';
import Icon from '@mdi/react';
const AdminNavbar = () => {
  const basket = useSelector(state=>state.product.basket)
  
  return (
  <>
     <Navbar collapseOnSelect expand="lg" className="" >
      <Container>
        <Navbar.Brand href="/"> <img src= {logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Hygiene products" id="collapsible-nav-dropdown" >
              <NavDropdown.Item href={`/cart/General hygiene`}>General hygiene</NavDropdown.Item>
              <NavDropdown.Item href={`/cart/Droguerie`}>Droguerie </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Bags & Collections" id="collapsible-nav-dropdown">
              <NavDropdown.Item  href={`/cart/Poubel  Bags`}>Poubel  Bags</NavDropdown.Item>
              <NavDropdown.Item  href={`/cart/Trash`}>Trash</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href={`/cart/Wiping Paper`}>Wiping Paper</Nav.Link>
            <Nav.Link  href={`/cart/Brush`}>Brush</Nav.Link>
            <Nav.Link href="/contact-us">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            
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

 
export default AdminNavbar
