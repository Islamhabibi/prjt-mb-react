import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
 import CardUpdateCategorie from '../components/Cards/CardsCategories/CardUpdateCategorie';
import CardListCategories from '../components/Cards/CardsCategories/CardListCategories.js';
import CardsListProduct from '../components/Cards/CardsProduct/CardsListProduct';
import Index from '../views/Index.js';
import Cart from '../components/Customerview/Cart.js';
import ContactUS from '../components/Customerview/ContactUS.js';
import Basket from '../components/Customerview/Basket.js';
import Cancel from '../components/Customerview/Cancel.js';
import Success from '../components/Customerview/Success.js';
import ProductsCarousel from '../components/Customerview/ProductsCarousel.js';
import ProductCateg from '../components/Customerview/ProductCateg.js';
   /* ***Layouts**** */
const Navbar = (lazy(()=>import('../components/layouts/FullLayout.js')))
/* ****Pages***** */
const Dashboard =  (lazy(() => import('../components/Cards/CardsCategories/CardListCategories.js')))
const Products =  (lazy(() => import('../components/Cards/CardsProduct/CardsListProduct')))
const Productadd = (lazy(()=> import('../views/admin/Products.js')))
 const Register =  (lazy(() => import('../views/auth/Register')));
const Login =  (lazy(() => import('../views/auth/Login')));
const AllCustomer = (lazy(() => import('../components/Cards/CardListCustomers.js')))
const ProductDetail=(lazy(()=>import('../components/Customerview/ProductDetail.js')))
const Router = [
  {
    path: '/admin',
    
    children: [
      { path: '/admin', element: <Navigate to="/admin/dashboard" /> },
      { path: '/admin/dashboard', exact: true, element: <Dashboard /> },
      { path: '/admin/product-list', exact: true, element: <Products /> },
      { path: '/admin/add-product', exact: true, element: <Productadd  /> },
      { path: '/admin/all-customer', exact: true, element: <AllCustomer  /> },
      
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
   
    children: [
     
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
   
    children: [ 
     
      { path: '/', element: <Index /> },
      { path: '/cart/:name', element: <Cart /> },
      { path: '/contact-us', element: <ContactUS/>  },
      { path:'/detail-product/:id', element:<ProductDetail/>},
      { path:'/category-product',element:<ProductCateg/>},
      { path:'/basket/', element:<Basket/>},
      { path:'/success', element:<Success/>},
      { path:'/cancel/', element:<Cancel/>}
    ],
  },
   
   
];

export default Router;
