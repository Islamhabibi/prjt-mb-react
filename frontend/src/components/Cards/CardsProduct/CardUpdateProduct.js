import React, { useEffect, useState } from 'react'
import 'quill/dist/quill.snow.css'; // pour importer le style de Quill
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '../../Redux/Action/CategorieAction';
import {  FindProduct, UpdateProduct } from '../../Redux/Action/ProductAction';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
function CardUpdateProduct() {    
    const idptd= useParams()
    const dispatch = useDispatch();
  //console.log(idptd.id)
    useEffect(()=>{
        dispatch(FindProduct(idptd.id))
        dispatch(GetCategories())
    },[])
     const data= useSelector((state)=> state.product.product)
      const listctg = useSelector((state)=> state.categorie.categories)
       // console.log(data)
      const [Name,setName]= useState(data.Name)
      const [Description, setDescription] = useState(data.Description);
      const [Avatar,setAvatar]= useState([])
      const [Price, setPrice] =useState(data.Price)
      const [QtStock, setQtStock] = useState(data.QtStock)
      const [idCategorie,setIdCategorie]= useState(data.idCategorie)    
      const [Status, setStatus] = useState(data.Status)
    const navigate = useNavigate()
    
    const handleChange = (value) => {
   
        setDescription(value);
    }; 
   
    const Updateprod= async ()=>{ 
      const formaData=new FormData()
      formaData.append('file',Avatar)
      formaData.append('upload_preset','ml_default')
      if(Avatar?.length === undefined){
        await axios
        .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload',formaData)
        .then(
          (res)=>
            {dispatch
              (UpdateProduct(data._id,
                {Name,Description,Price,QtStock,idCategorie,Status,Avatar:res.data.url},navigate
                )
              )   
            }
            ) 
          }else { 
            dispatch
            (
                UpdateProduct(data._id,
                    {Name,Description,Price,QtStock,idCategorie,Status,Avatar:data.Avatar},navigate
                    ) 
            )
          }//console.log({Name,Description,Price,QtStock,idCategorie,Status,Avatar})
    }
  return (
    <>

        <div className="app-ecommerce">
  {/* Add Product */}
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
    <div className="d-flex flex-column justify-content-center">
      <h4 className="mb-1 mt-3">Update Product</h4>
      
    </div>
    <div className="d-flex align-content-center flex-wrap gap-3">
      
      <a className="btn btn-outline-secondary waves-effect" href={'/admin/product-list'}>
        Discard
      </a>
      <button className="btn btn-outline-primary waves-effect"
        onChange={(e) => { setStatus(false) }}
        onClick={Updateprod}
      >
        Update And draft
      </button>
      <button
        type="submit"
        className="btn btn-primary waves-effect waves-light"
        onChange={(e) => { setStatus(true) }}
        onClick={Updateprod}
      >
       Update And Publish product
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
              defaultValue={data.Name}
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
                defaultValue={data.Description}
                name="Description"
                //onChange={handleChange}
                onChange={(e)=>setDescription(e.target.value)}
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
        <div className="card-body row">
         
        <div className="form-floating form-floating-outline mb-4 col-6 col-lg-4 col-sm-12">
            <img      width={200}
                      height={290}
                      src={data.Avatar}
                      alt="product-avatar"
                      className="d-block  rounded"
                      id="uploadedAvatar"
                    />
            </div>
            <div className="dz-message needsclick my-5 col-6 col-lg-6 col-sm-12">
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
              defaultValue={data.Price}
              onChange={(e)=>setPrice(e.target.value)}
            />
            <label htmlFor="ecommerce-product-price">Best Price</label>
          </div>
         
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
                  
                  <option value={data.idCategorie} >
                  {data.idCategorie}
                  </option>
                  {
                    listctg?.map(
                      (e)=>( (data.idCategorie!== e.Name) && data.idCategorie!== e.Name?
                      <option 
                        value={e.Name} key={e.Name}>
                          {e.Name} 
                        </option>:null)
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
              
              <label htmlFor="collection">Category</label>
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
                defaultValue={data.QtStock}
                 onChange={(e)=>{setQtStock(e.target.value)}}
              /> 
              <label htmlFor="status-org">QTY</label>
            </div>
            
          </div>
         
          </div>
          </div>
    </div>
    {/* /Second column */}
  </div>
</div>
 
    </>
  )
}

export default CardUpdateProduct


 