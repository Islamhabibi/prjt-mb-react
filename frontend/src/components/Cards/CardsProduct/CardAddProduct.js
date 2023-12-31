import React, { useEffect, useState } from 'react'
import 'quill/dist/quill.snow.css'; // pour importer le style de Quill
import ReactQuill, { quillEditor } from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '../../Redux/Action/CategorieAction';
import { AddProduct, Addproduct2 } from '../../Redux/Action/ProductAction';
import axios from 'axios';
import { useNavigate } from 'react-router';
import FooterAdmin from '../../Footers/FooterAdmin';
function CardAddProduct() {    
    const [Name,setName]= useState('')
    const [Description, setDescription] = useState('');
    const [Avatar,setAvatar]= useState([])
    const [Price, setPrice] =useState(0)
    const [QtStock, setQtStock] = useState(1)
    const [idCategorie,setIdCategorie]= useState('')    
    const [Status, setStatus] = useState(true)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
     
     
     //recupere list des categ
    useEffect(()=>{
      dispatch(GetCategories())
    },[])
    const listctg = useSelector((state)=> state.categorie.categories)
   
    //fin fct
    console.log({Name,Description,Price,QtStock,idCategorie,Status,Avatar})
    const Addprod= async ()=>{ 
      const formaData=new FormData()
      formaData.append('file',Avatar)
      formaData.append('upload_preset','ml_default')
      if(Avatar.length===undefined){
        await axios
        .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload',formaData)
        .then(
          (res)=>
            {dispatch
              (AddProduct(
                {Name,Description,Price,QtStock,idCategorie,Status,Avatar:res.data.url}
                ,navigate)
              );  //console.log({Name,Description,Price,QtStock,idCategorie,Status,Avatar})
            }
            )
          }else{
            dispatch
              (AddProduct(
                {Name,Description,Price,QtStock,idCategorie,Status}
                ,navigate)
              );
          }
    }
  return (
    <>
        <div className="app-ecommerce">
  {/* Add Product */}
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
    <div className="d-flex flex-column justify-content-center">
      <h4 className="mb-1 mt-3">Add a new Product</h4>
      
    </div>
    <div className="d-flex align-content-center flex-wrap gap-3">
      <button className="btn btn-outline-secondary waves-effect">
        Discard
      </button>
      <button className="btn btn-outline-primary waves-effect"
        onChange={(e) => { setStatus(false) }}
        onClick={Addprod}
      >
        Save draft
      </button>
      <button
        type="submit"
        className="btn btn-primary waves-effect waves-light"
        onChange={(e) => { setStatus(true) }}
        onClick={Addprod}
      >
        Publish product
      </button>
    </div>
  </div>
  <div className="row">
    {/* First column*/}
    <div className="col-12 col-lg-8">
      {/* Product Information */}
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-tile mb-0">Product information</h5>
        </div>
        <div className="card-body">
           {/**Name product */}
          <div className="form-floating form-floating-outline mb-4">
            <input
              type="text"
              className="form-control"
              id="ecommerce-product-name"
              placeholder="Product title"
              name="productTitle"
              aria-label="Product title"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="ecommerce-product-name">Name</label>
          </div>
         
          {/* Comment */}
          <div>
            <label className="form-label">
              Description <span className="text-muted">(Optional)</span>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              name="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            
          </div>
        </div>
      </div>
      {/* /Product Information */}
      {/* Media */}
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0 card-title">Media</h5>
          
        </div>
        <div className="card-body">
          
            <div className="dz-message needsclick my-5">
              Drop your image here
              <small className="text-muted d-block fs-6 my-2">or</small>
              <input 
                className="form-control" type="file" 
                accept="image/*" id="ecommerce-category-image"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </div>
          
        </div>
      </div>
      {/* /Media */}
     
       
    </div>
    {/* /Second column */}
    {/* Second column */}
    <div className="col-12 col-lg-4">
      {/* Pricing Card */}
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-title mb-0">Pricing</h5>
        </div>
        <div className="card-body">
          {/* Base Price */}
          <div className="form-floating form-floating-outline mb-4">
            <input
              type="number"
              min="10"
              step="any"
              className="form-control"
              id="ecommerce-product-price"
              placeholder="Price"
              name="productPrice"
              aria-label="Product price"
              onChange={(e)=>setPrice(e.target.value)}
            />
            <label htmlFor="ecommerce-product-price">Best Price</label>
          </div>
          {/* Discounted Price 
          <div className="form-floating form-floating-outline mb-4">
            <input
              type="number"
              min="10"
              step="any"
              className="form-control"
              id="ecommerce-product-discount-price"
              placeholder="Discounted Price"
              name="productDiscountedPrice"
              aria-label="Product discounted price"
            />
            <label htmlFor="ecommerce-product-discount-price">
              Discounted Price
            </label>
          </div>*/}
          {/* Charge tax check box 
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="price-charge-tax"
              defaultChecked=""
            />
            <label className="form-label" htmlFor="price-charge-tax">
              Charge tax on this product
            </label>
          </div>*/}
          {/* Instock switch
           <div className="d-flex justify-content-between align-items-center border-top pt-3">
            <p className="mb-0">In stock</p>
            <div className="w-25 d-flex justify-content-end">
              <label className="switch switch-primary  me-4 pe-2">
                <input
                  type="checkbox"
                  className="switch-input"
                  defaultChecked=""
                />
                <span className="switch-toggle-slider">
                  <span className="switch-on">
                    <span className="switch-off" />
                  </span>
                </span>
              </label>
            </div>
          </div> */}
         
        </div>
      </div>
      {/* /Pricing Card */}
      {/* Organize Card */}
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-title mb-0">Category</h5>
        </div>
        <div className="card-body">
          
           
          
          {/* Collection */}
          <div className="mb-4 col ecommerce-select2-dropdown">
            <div className="form-floating form-floating-outline form-floating-select2">
               
                <select
                  id="collection"
                  className="select2 form-select select2-hidden-accessible"
                  data-placeholder="Collection"
                  data-select2-id="collection"
                  tabIndex={-1}
                  aria-hidden="true"
                  onChange={(e) => setIdCategorie(e.target.value)}
                >
                  <option value="" data-select2-id={10}>
                    Select Category
                  </option>
                  {
                    listctg?.map(
                      (e)=>(<option 
                        
                        value={e.Name} key={e.Name}>
                          {e.Name} 
                        </option>)
                    )
                  }
                   
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id={9}
                  style={{ width: 408 }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-collection-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-collection-container"
                        role="textbox"
                        aria-readonly="true"
                      >
                       
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" />
                </span>
              
              <label htmlFor="collection">Collection</label>
            </div>
          </div>
        </div>
      </div>
      {/* /Stock Card */}
       {/* Status */}
       <div className="card mb-4">
       <div className="card-header">
          <h5 className="card-title mb-0">Stock</h5>
        </div>
        <div className="card-body">
       <div className="mb-4 col ecommerce-select2-dropdown">
            <div className="form-floating form-floating-outline form-floating-select2">
               
              <input
                type="number"
                min="1"
                step="1"
                className="form-control"
                id="ecommerce-product-Qty"
                placeholder="QTY"
                name="QtyPrice"
                aria-label="Product Qty"
                 onChange={(e)=>{setQtStock(e.target.value)}}
              /> 
              <label htmlFor="status-org">QTY</label>
            </div>
            
          </div>
         {/**  <div className="mb-4 col ecommerce-select2-dropdown">
            <div className="form-floating form-floating-outline form-floating-select2">
               
                <select
                  id="status-org"
                  className="select2 form-select select2-hidden-accessible"
                  data-placeholder="Select Status"
                  data-select2-id="status-org"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="" data-select2-id={12}>
                    Select Status
                  </option>
                  <option value="Published">Published</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id={11}
                  style={{ width: 408 }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-status-org-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-status-org-container"
                        role="textbox"
                        aria-readonly="true"
                      >
                        
                      </span>
                       
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" />
                </span>
               
              <label htmlFor="status-org">Status</label>
            </div>
            
          </div>*/}
          </div>
          </div>
    </div>
    {/* /Second column */}
  </div>
</div>
 <FooterAdmin/>
    </>
  )
}

export default CardAddProduct
