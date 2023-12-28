import Icon from '@mdi/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mdiDeleteAlert, mdiEyeSettings } from '@mdi/js';
import {  DeleteOneCustomer, GetUsersCustomer } from '../../Redux/Action/CustomerAction';
import AdminNavbar from '../../Navbars/AdminNavbar';

function CardListCustomers() {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(GetUsersCustomer())
    },[])
    const userFormState = useSelector((state)=> state.customer.customers)
    //console.log(userFormState)
  return (
    <>
    <AdminNavbar/>
    <div className="container-xxl flex-grow-1 container-p-y">
{/* Users List Table */}
<div className="card">
  <div className="card-header">
    <h5 className="card-title">List Customer</h5>
    
  </div>
  <div className="card-datatable table-responsive">
    <div
      id="DataTables_Table_0_wrapper"
      className="dataTables_wrapper dt-bootstrap5 no-footer"
    >
      
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
              Customer
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
              Email
            </th>
            <th
              className="sorting"
              tabIndex={0}
              aria-controls="DataTables_Table_0"
              rowSpan={1}
              colSpan={1}
              style={{ width: 148 }}
              aria-label="Role: activate to sort column ascending"
            >
              City
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
              Country
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
                    <span className="fw-medium">{e.FirstName}</span>
                  </a>
                  <small>@{e.LastName}</small>
                </div>
              </div>
            </td>
            <td>
              <span>{e.Email}</span>
            </td>
            <td>
              <span className="text-truncate d-flex align-items-center">
                <i className="mdi mdi-chart-donut mdi-20px text-success me-2" />
                {e.City}
              </span>
            </td>
            <td>
              <span className="text-truncate d-flex align-items-center">
                <i className="mdi mdi-chart-donut mdi-20px text-success me-2" />
                {e.Country}
              </span>
            </td>
            
             
            <td>
              <div className="d-inline-block text-nowrap">
              <span onClick={()=>dispatch(DeleteOneCustomer(e._id))}><Icon path={mdiDeleteAlert} size={1} /></span>
              <Link to={`/admin/settings-customer/${e._id}`}><Icon path={mdiEyeSettings} size={1} /></Link>
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

  </>
  )
}

export default CardListCustomers
