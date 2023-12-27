 

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    
    href: '/admin',
  },
  {
    navlabel: true,
    subheader: 'Product',
  },
  {
    id: uniqueId(),
    title: 'List of product',
    
    href: '/admin/product-list',
  },
  {
    id: uniqueId(),
    title: 'Add new Product',
    
    href: '/admin/add-product',
  },
  
  {
    navlabel: true,
    subheader: 'Customer',
  },
  {
    id: uniqueId(),
    title: 'List of Customer',
    
    href: '/admin/all-customer',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    
    href: '/sample-page',
  },
];

export default Menuitems;
