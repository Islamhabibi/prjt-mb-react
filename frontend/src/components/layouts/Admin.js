import React from 'react'
import { BrowserRouter as  Routes, Route, Navigate } from 'react-router-dom';


// components
//import Sidebar from '../Sidebar/Sidebar'
import AdminNavbar from '../Navbars/AdminNavbar'
// views
import Dashboard from '../../views/admin/Dashboard';
import Settings from '../../views/admin/Settings';
 import CardListUseres from '../Cards/CardListUseres';
import Auth from './Auth';
import CardListCategories from '../Cards/CardsCategories/CardListCategories';
import CardUpdateCategorie from '../Cards/CardsCategories/CardUpdateCategorie';
import CardsListProduct from '../Cards/CardsProduct/CardsListProduct';
import Products from '../../views/admin/Products';
import UpdatPro from '../../views/admin/updatPro';
import Register from '../../views/auth/Register';
import Login from '../../views/auth/Login';
import Registercustomer from '../../views/Customer/Registercustomer';
import CardListCustomers from '../Cards/CardListCustomers';
import CardProfile from '../Cards/CardProfile';
import FooterAdmin from '../Footers/FooterAdmin';
import LoginCustomer from '../../views/Customer/LoginCustomer';
function Admin() {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <Routes>
      {/* Nested Routes in Admin */}
      <Route path="/auth" component={<Auth/>} />
      <Route path='/category-list' element={<CardListCategories />} />
      <Route path='/settings-categ/:id' element={<CardUpdateCategorie />} />
      <Route path='/product-list' element={<CardsListProduct />} />
      <Route path='/Add-product' element={<Products />} />
      <Route path='/settings-prouct/:id' element={<UpdatPro />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Users' element={<CardListUseres />} />
      <Route path='/settings-user/:id' element={<Settings />} />
      <Route path='/registeruser' element={<Registercustomer />} />
      <Route path='/userlogin' element={<LoginCustomer />} />
      <Route path='/customer-all' element={<CardListCustomers />} />
      <Route path='/customer-details/:id' element={<CardProfile />} />
      <Route path="/admin/*" element={<Navigate to="/admin/category-list" />} />
    </Routes>
             
           
        </div>
        <FooterAdmin/> 
      </div>
    </>
  )
}

export default Admin
