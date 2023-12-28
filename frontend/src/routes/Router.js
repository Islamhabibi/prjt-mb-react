import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
 import CardUpdateCategorie from '../components/Cards/CardsCategories/CardUpdateCategorie';
import CardListCategories from '../components/Cards/CardsCategories/CardListCategories.js';
import CardsListProduct from '../components/Cards/CardsProduct/CardsListProduct';
import Index from '../views/Index.js';
import ContactUS from '../components/Customerview/ContactUS.js';
import Basket from '../components/Customerview/Basket.js';
import Cancel from '../components/Customerview/Cancel.js';
import Success from '../components/Customerview/Success.js';
import ProductsCarousel from '../components/Customerview/ProductsCarousel.js';
import ProductCateg from '../components/Customerview/ProductCateg.js';
import Page404 from '../views/Page404.js';
import UpdatPro from '../views/admin/updatPro.js';
import CardListUseres from '../components/Cards/CardListUseres.js';
import Settings from '../views/admin/Settings.js';
import CardProfile from '../components/Cards/CardProfile.js';
import CardsProfileCustomer from '../components/Cards/CardsCustomers/CardsProfileCustomer.js';
  
/* ****Pages***** */
const Dashboard =  (lazy(() => import('../components/Cards/CardsCategories/CardListCategories.js')))
const Products =  (lazy(() => import('../components/Cards/CardsProduct/CardsListProduct')))
const Productadd = (lazy(()=> import('../views/admin/Products.js')))
const Register =  (lazy(() => import('../views/auth/Register')));
const Login =  (lazy(() => import('../views/auth/Login')));
const AllCustomer = (lazy(() => import('../components/Cards/CardsCustomers/CardListCustomers.js')))
const ProductDetail=(lazy(()=>import('../components/Customerview/ProductDetail.js')))
const Updatecateg =(lazy(()=>import('../components/Cards/CardsCategories/CardUpdateCategorie.js')))
const Router = [
  {
    path: '/admin',
   
    children: [
      { path: '/admin', element: <Navigate to="/admin/dashboard" /> },
      //category
      { path: '/admin/dashboard', exact: true, element: <Dashboard /> },
      { path: '/admin/category-list', exact: true, element: <Dashboard /> },
      { path: '/admin/settings-categ/:id', exact:true, element: <CardUpdateCategorie/>},
      //product
      { path: '/admin/product-list', exact: true, element: <Products /> },
      { path: '/admin/add-product', exact: true, element: <Productadd  /> },
      { path: '/admin/settings-product/:id', exact: true, element: <UpdatPro  /> },
      //customer
      { path: '/admin/all-customer', exact: true, element: <AllCustomer  /> },
      { path: '/admin/settings-customer/:id', exact: true, element: <CardsProfileCustomer  /> },
      //team
      { path: '/admin/all-team', exact: true, element: <CardListUseres/> },
      { path: '/admin/profil', exact: true, element: <CardProfile/> },
      { path: '/admin/settings-team/:id', exact: true, element: <Settings/> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
   
  {
    path: '/auth',
   
    children: [
     
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      {path :'/auth/404',exact: true, element:<Page404/>},
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
   
    children: [ 
     
      { path: '/', element: <Index /> },
      { path: '/category-product/:name', element: <ProductCateg /> },
      { path: '/contact-us', element: <ContactUS/>  },
      { path:'/detail-product/:id', element:<ProductDetail/>},
      { path:'/basket/', element:<Basket/>},
      { path:'/success', element:<Success/>},
      { path:'/cancel/', element:<Cancel/>}
    ],
  },
   
   
];

export default Router;
