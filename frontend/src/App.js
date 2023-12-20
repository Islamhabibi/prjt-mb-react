import './App.css';
import CardListUseres from './components/Cards/CardListUseres';
 
import CardSettings from './components/Cards/CardSettings';
import FooterAdmin from './components/Footers/FooterAdmin';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
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
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 useEffect(()=>{
    dispatch(getcurrent())
 },[])
   const user= useSelector(state=>state.team.user)
   console.log(user.Profile)
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
*/}
 
 <Navbar />
 <FrontNavbar/>
    
      <Routes>
       <Route path='/register' element={<Register />} />
       <Route path='/login' element={<Login />} />
       <Route path='/listcategories' element={<CardListCategories/>}/>
       <Route path='/listuseres' element={<CardListUseres/>}/>
       <Route path='/settings/:id' element={<Settings/>}/>
       <Route path='/profile/:id' element={<CardProfile/>}/>
       <Route path='/registeruser' element={<Registercustomer/>}/>
       <Route path='/userlogin' element={<LoginCustomer/>}/>
        <Route path='/listCustomers' element={<CardListCustomers/>}/>
        <Route path='/' element={<Index/>}/>
     </Routes>
      
      
      <FooterAdmin/> 
    </>
    
  );
}

export default App;
