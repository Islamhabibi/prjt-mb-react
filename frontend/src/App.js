import './App.css';
import CardListUseres from './components/Cards/CardListUseres';
 
import CardSettings from './components/Cards/CardSettings';
import FooterAdmin from './components/Footers/FooterAdmin';
import { Link, Navigate, Route, Routes, useNavigate, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Register from './views/auth/Register'
import Login from'./views/auth/Login'
import Settings from './views/admin/Settings';
import CardProfile from './components/Cards/CardProfile';
 
import Stepper from './views/auth/Stepper';
import Registercustomer from './views/Customer/Registercustomer';
import FrontNavbar from './components/Navbars/FrontNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getcurrent } from './components/Redux/Action/TeamAction';
import LoginCustomer from './views/Customer/LoginCustomer';
import CardListCustomers from './components/Cards/CardListCustomers';
import Index from './views/Index';
import Dashboard from './views/admin';
import CardListCategories from './components/Cards/CardsCategories/CardListCategories';
import CardUpdateCategorie from './components/Cards/CardsCategories/CardUpdateCategorie';
import Navbarverticl from './components/Navbars/navbarverticl';
import Categories from './views/admin/Categories';
import AdminNavbar from './components/Navbars/AdminNavbar';
import Products from './views/admin/Products';
import CardsListProduct from './components/Cards/CardsProduct/CardsListProduct';
import CardUpdateProduct from './components/Cards/CardsProduct/CardUpdateProduct';
import UpdatPro from './views/admin/updatPro';
import ContactUS from './components/Customerview/ContactUS';
import Cart from './components/Customerview/Cart';
import Auth from './components/layouts/Auth';
import Router from './routes/Router';
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 useEffect(()=>{
    dispatch(getcurrent())
 },[])
   const user= useSelector(state=>state.team.user)
   //console.log(user.Profile)
   const routing = useRoutes(Router);

  return (
    <>
      {routing}
    </>
    
  );
}

export default App;
