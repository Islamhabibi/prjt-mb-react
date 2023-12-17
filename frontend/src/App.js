import './App.css';
import CardListUseres from './components/Cards/CardListUseres';
 
import CardSettings from './components/Cards/CardSettings';
import FooterAdmin from './components/Footers/FooterAdmin';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Register from './views/auth/Register'
import Login from'./views/auth/Login'
import Settings from './views/admin/Settings';
import CardProfile from './components/Cards/CardProfile';
function App() {
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
    
    <Admin/> */}
      <Navbar/>
      <Routes>
       <Route path='/register' element={<Register />} />
       <Route path='/login' element={<Login />} />
       <Route path='/dashboard' element={<CardListUseres/>}/>
       <Route path='/settings/:id' element={<Settings/>}/>
       <Route path='/profile/:id' element={<CardProfile/>}/>
     </Routes>
      
      
      <FooterAdmin/> 
    </>
    
  );
}

export default App;
