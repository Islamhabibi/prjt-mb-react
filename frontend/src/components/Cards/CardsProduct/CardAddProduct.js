import React, { useState } from 'react'
import 'quill/dist/quill.snow.css'; // pour importer le style de Quill
import ReactQuill, { quillEditor } from 'react-quill';
function CardAddProduct() {
    const [description, setDescription] = useState('');

 const handleChange = (value) => {
    setDescription(value);
 };
  return (
    <>
        <div className="app-ecommerce">
  {/* Add Product */}
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
    <div className="d-flex flex-column justify-content-center">
      <h4 className="mb-1 mt-3">Add a new Product</h4>
      <p>Orders placed across your store</p>
    </div>
    <div className="d-flex align-content-center flex-wrap gap-3">
      <button className="btn btn-outline-secondary waves-effect">
        Discard
      </button>
      <button className="btn btn-outline-primary waves-effect">
        Save draft
      </button>
      <button
        type="submit"
        className="btn btn-primary waves-effect waves-light"
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
          <div className="form-floating form-floating-outline mb-4">
            <input
              type="text"
              className="form-control"
              id="ecommerce-product-name"
              placeholder="Product title"
              name="productTitle"
              aria-label="Product title"
            />
            <label htmlFor="ecommerce-product-name">Name</label>
          </div>
          <div className="row mb-3">
            <div className="col">
              <div className="form-floating form-floating-outline">
                <input
                  type="number"
                  className="form-control"
                  id="ecommerce-product-sku"
                  placeholder='00000'
                  name="productSku"
                  aria-label="Product SKU"
                />
                <label htmlFor="ecommerce-product-sku">SKU</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating form-floating-outline">
                <input
                  type="text"
                  className="form-control"
                  id="ecommerce-product-barcode"
                  placeholder="0123-4567"
                  name="productBarcode"
                  aria-label="Product barcode"
                />
                <label htmlFor="ecommerce-product-name">Barcode</label>
              </div>
            </div>
          </div>
          {/* Comment */}
          <div>
            <label className="form-label">
              Comment <span className="text-muted">(Optional)</span>
            </label>
            <ReactQuill
                id="product-description"
                value={description}
                onChange={handleChange}
                placeholder="Product Description"
            />
          </div>
        </div>
      </div>
      {/* /Product Information */}
      {/* Media */}
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0 card-title">Media</h5>
          <a href="javascript:void(0);" className="fw-medium">
            Add media from URL
          </a>
        </div>
        <div className="card-body">
          <form
            action="/upload"
            className="dropzone needsclick dz-clickable"
            id="dropzone-basic"
          >
            <div className="dz-message needsclick my-5">
              Drag and drop your image here
              <small className="text-muted d-block fs-6 my-2">or</small>
              <span
                className="needsclick btn btn-outline-primary d-inline waves-effect"
                id="btnBrowse"
              >
                Browse image
              </span>
            </div>
          </form>
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
              className="form-control"
              id="ecommerce-product-price"
              placeholder="Price"
              name="productPrice"
              aria-label="Product price"
            />
            <label htmlFor="ecommerce-product-price">Best Price</label>
          </div>
          {/* Discounted Price */}
          <div className="form-floating form-floating-outline mb-4">
            <input
              type="number"
              className="form-control"
              id="ecommerce-product-discount-price"
              placeholder="Discounted Price"
              name="productDiscountedPrice"
              aria-label="Product discounted price"
            />
            <label htmlFor="ecommerce-product-discount-price">
              Discounted Price
            </label>
          </div>
          {/* Charge tax check box */}
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
          </div>
          {/* Instock switch */}
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
          </div>
        </div>
      </div>
      {/* /Pricing Card */}
      {/* Organize Card */}
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-title mb-0">Organize</h5>
        </div>
        <div className="card-body">
          {/* Vendor */}
          <div className="mb-4 col ecommerce-select2-dropdown">
            <div className="form-floating form-floating-outline form-floating-select2">
               
                <select
                  id="vendor"
                  className="select2 form-select select2-hidden-accessible"
                  data-placeholder="Select Vendor"
                  data-select2-id="vendor"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="" data-select2-id={6}>
                    Select Vendor
                  </option>
                  <option value="men-clothing">Men's Clothing</option>
                  <option value="women-clothing">Women's-clothing</option>
                  <option value="kid-clothing">Kid's-clothing</option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id={5}
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
                      aria-labelledby="select2-vendor-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-vendor-container"
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
               
              <label htmlFor="vendor">Vendor</label>
            </div>
          </div>
          {/* Category */}
          <div className="mb-4 col ecommerce-select2-dropdown d-flex justify-content-between">
            <div className="form-floating form-floating-outline w-100 me-3 form-floating-select2">
               
                <select
                  id="category-org"
                  className="select2 form-select select2-hidden-accessible"
                  data-placeholder="Select Category"
                  data-select2-id="category-org"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="" data-select2-id={8}>
                    Select Category
                  </option>
                  <option value="Household">Household</option>
                  <option value="Management">Management</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Office">Office</option>
                  <option value="Automotive">Automotive</option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id={7}
                  style={{ width: 342 }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-category-org-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-category-org-container"
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
               
              <label htmlFor="category-org">Category</label>
            </div>
            <div>
              <button className="btn btn-outline-primary btn-icon btn-lg h-px-50 w-px-50 waves-effect">
                <i className="mdi mdi-plus mdi-24px" />
              </button>
            </div>
          </div>
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
                >
                  <option value="" data-select2-id={10}>
                    Collection
                  </option>
                  <option value="men-clothing">Men's Clothing</option>
                  <option value="women-clothing">Women's-clothing</option>
                  <option value="kid-clothing">Kid's-clothing</option>
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
          {/* Status */}
          <div className="mb-4 col ecommerce-select2-dropdown">
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
          </div>
          {/* Tags */}
           
        </div>
      </div>
      {/* /Organize Card */}
    </div>
    {/* /Second column */}
  </div>
</div>
 
    </>
  )
}

export default CardAddProduct
