import { mdiDeleteAlert, mdiEyeSettings, mdiLeadPencil } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
 import { DeleteProduct, GetAllProducts } from '../../Redux/Action/ProductAction'
 import Button from 'react-bootstrap/Button';

import FooterAdmin from '../../Footers/FooterAdmin'
import AdminNavbar from '../../Navbars/AdminNavbar'
function truncateText(text, maxLength) {
  if (typeof text !== 'string' || text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + '...';
  }
}
function CardsListProduct() {
 
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetAllProducts())    
  },[])
  const userFormState = useSelector((state)=> state.product.products)
  
  //console.log(userFormState)
 
  return (
    < >
    <AdminNavbar/>
         <div className="container-xxl flex-grow-1 container-p-y">
  {/* Users List Table */}
  <div className="card">
    
    <div className="card-datatable table-responsive">
      <div
        id="DataTables_Table_0_wrapper"
        className="dataTables_wrapper dt-bootstrap5 no-footer"
      >
        <div className="row mx-1">
          <div className="col-md-2 d-flex align-items-center justify-content-md-start justify-content-center">
            <div className="dt-action-buttons">
              
            </div>
          </div>
          <div className="col-md-10">
            <div className="d-flex align-items-center justify-content-md-end justify-content-center">
              <div className="me-3">
                <div
                  id="DataTables_Table_0_filter"
                  className="dataTables_filter"
                >
                  <label>
                    
                  </label>
                </div>
              </div>
              <div className="add-new">
              <Link to={`/admin/add-product`}>
              <Button variant="primary" >
                Add New Product
            </Button>
                   </Link>
               
              </div>
            </div>
          </div>
        </div>
        <table
          className="datatables-users table dataTable no-footer dtr-column"
          id="DataTables_Table_0"
          aria-describedby="DataTables_Table_0_info"
          style={{ width: 1394 }}
        >
          <thead className="border-top table-light">
            <tr>
              <th
                className="control sorting_disabled dtr-hidden"
                rowSpan={1}
                colSpan={1}
                style={{ width: 0, display: "none" }}
                aria-label=""
              />
              <th
                className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                rowSpan={1}
                colSpan={1}
                style={{ width: 18 }}
                data-col={1}
                aria-label=""
              >
                <input type="checkbox" className="form-check-input" />
              </th>
              <th
                className="sorting sorting_desc"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 290 }}
                aria-label="User: activate to sort column ascending"
                aria-sort="descending"
              >
                Product
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 336 }}
                aria-label="Email: activate to sort column ascending"
              >
                Category
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 336 }}
                aria-label="Email: activate to sort column ascending"
              >
                Price
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 336 }}
                aria-label="Email: activate to sort column ascending"
              >
                Qty
              </th>
              
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                rowSpan={1}
                colSpan={1}
                style={{ width: 94 }}
                aria-label="Status: activate to sort column ascending"
              >
                Status
              </th>
              <th
                className="sorting_disabled"
                rowSpan={1}
                colSpan={1}
                style={{ width: 95 }}
                aria-label="Actions"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
             {/* donnees user*/}
            {
              userFormState?.map((e)=>(
                <tr className="odd">
              <td
                className="  control"
                tabIndex={0}
                style={{ display: "none" }}
              />
              <td className="  dt-checkboxes-cell">
                <input
                  type="checkbox"
                  className="dt-checkboxes form-check-input"
                />
              </td>
              
              <td className="sorting_1">
                <div className="d-flex justify-content-start align-items-center user-name">
                  {/**Avatar */}
                  <div className="avatar-wrapper">
                    <div className="avatar avatar-sm me-3">
                      <img
                        src={e.Avatar}
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <a
                      href="app-user-view-account.html"
                      className="text-heading text-truncate"
                    >
                      <span className="fw-medium">{e.Name}</span>
                    </a>
                    <small>{truncateText(e.Description, 30)}</small>
                    
                  </div>
                </div>
              </td>
              <td>
                <span > 
                   
                  {e.idCategorie}</span>
              </td>
              <td>
              <span className="text-truncate d-flex align-items-center">
                 {e.Price}
              </span>
            </td>
            <td>
              <span className="text-truncate d-flex align-items-center">
               {e.QtStock}
              </span>
            </td>
              
              <td>
                {(e.Status)?
                (<span
                  className="badge rounded-pill bg-label-success"
                  text-capitalized=""
                >
                  Active
                </span>)
                :
                <span className="badge rounded-pill bg-label-secondary"
                 text-capitalized=""
                 >
                  Inactive</span>
                }
                
              </td>
              <td>
                <div className="d-inline-block text-nowrap">
                <span onClick={()=>dispatch(DeleteProduct(e._id))}><Icon path={mdiDeleteAlert} size={1} /></span>
                <span>
                  <Link to={`/admin/settings-product/${e._id}`}>
                  <Icon  path={mdiLeadPencil} size={1} />
                   </Link>
                   
                   </span>  
                

                </div>
               </td> 
              
            </tr>
              ))
            }
            
              {/* fin donnees user*/}
             
          </tbody>
        </table>
        
      </div>
    </div>
   
      
    
  </div>
</div>
 <FooterAdmin/>
    </>
  )
}

export default CardsListProduct


