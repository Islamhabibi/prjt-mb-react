import React from 'react'
import { BrowserRouter as  Routes, Route } from 'react-router-dom';


// components
//import Sidebar from '../Sidebar/Sidebar'
import AdminNavbar from '../Navbars/AdminNavbar'
// views
import Dashboard from '../../views/admin/Dashboard';
import Settings from '../../views/admin/Settings';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import CardListUseres from '../Cards/CardListUseres';
function Admin() {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path='/admin/listusers' element={<CardListUseres/>}/>
            <Redirect from="/admin" to ="/admin/dashboard"/>
          </Routes>
             
           
        </div>
      </div>
    </> 
  )
}

export default Admin
