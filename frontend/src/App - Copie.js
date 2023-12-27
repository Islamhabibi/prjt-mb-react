import './App.css';
import CardListUseres from './components/Cards/CardListUseres';
 
import CardSettings from './components/Cards/CardSettings';
import FooterAdmin from './components/Footers/FooterAdmin';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
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
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 useEffect(()=>{
    dispatch(getcurrent())
 },[])
   const user= useSelector(state=>state.team.user)
   //console.log(user.Profile)
  return (
    <>
    {/*<AdminNavbar/>
    <Navbar/> <Login/>
    <Settings/>
     <Login/>
      <CardListUseres/>
    <Settings/>
    <Dashboard/>
<Navbar/>
    <>
    <div class="content-wrapper">
    <CardListUseres/>
    </div>
    </>
    
    <Admin/>       user && (user.Profile === 'SuperAdmin' || user.Profile === 'Admin') && <Navbar />
 <FrontNavbar/> <Navbarverticl/> <AdminNavbar/><Navbar/>
*/}

 


      <AdminNavbar/>
      
      <Routes>
        {/* route Categories*/}
        <Route path="/auth" component={<Auth/>} />
       <Route path='/category-list' element={<CardListCategories/>}/>
       <Route path='/settings-categ/:id' element={<CardUpdateCategorie/>}/>
        {/* route Categories*/}
        <Route path='/product-list' element={<CardsListProduct/>}/>
        <Route path='/Add-product' element={<Products/>}/>
        <Route path='/settings-prouct/:id' element={<UpdatPro/>}/>
       {/* route Team*/}
       <Route path='/register' element={<Register />} />
       <Route path='/login' element={<Login />} />
       <Route path='/Users' element={<CardListUseres/>}/>
       <Route path='/settings-user/:id' element={<Settings/>}/>
        {/* route Customers*/}
       <Route path='/registeruser' element={<Registercustomer/>}/>
       <Route path='/userlogin' element={<LoginCustomer/>}/>
       <Route path='/customer-all' element={<CardListCustomers/>}/>
       <Route path='/customer-details/:id' element={<CardProfile/>}/>
       
        {/* route site web  fronte*/}
        <Route path='/' element={<Index/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact-us' element={<ContactUS/>}/>
        <Route path='/admin' element={<Navigate to='/category-list'/>}/>
     </Routes>
      
      
      <FooterAdmin/> 
    </>
    
  );
}

export default App;
