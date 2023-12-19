import Icon from '@mdi/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mdiDeleteAlert, mdiEyeSettings } from '@mdi/js';
import { DeleteUser, GetUsersCustomer } from '../Redux/Action/CustomerAction';

function CardListCustomers() {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(GetUsersCustomer())
    },[])
    const userFormState = useSelector((state)=> state.customer.customers)
    console.log(userFormState)
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
{/* Users List Table */}
<div className="card">
  <div className="card-header">
    <h5 className="card-title">Search Filter</h5>
    <div className="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
      <div className="col-md-4 user_status">
      <div className="me-3">
              <div
                id="DataTables_Table_0_filter"
                className="dataTables_filter"
              >
                <label>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search.."
                    aria-controls="DataTables_Table_0"
                  />
                </label>
              </div>
            </div>
      </div>
    </div>
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
              <span onClick={()=>dispatch(DeleteUser(e._id))}><Icon path={mdiDeleteAlert} size={1} /></span>
             
              
              <Link to={`/settings/${e._id}`}><Icon path={mdiEyeSettings} size={1} /></Link>

              </div>
             </td> 
            {/* 
            <td>
              <div className="d-inline-block text-nowrap">
                <button
                  className="btn btn-sm btn-icon btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                  data-bs-toggle="dropdown"
                >
                  <i className="mdi mdi-dots-vertical mdi-20px" />
                </button>
                <div className="dropdown-menu dropdown-menu-end m-0">
                  <a
                    href="app-user-view-account.html"
                    className="dropdown-item"
                  >
                    <i className="mdi mdi-eye-outline me-2" />
                    <span>View</span>
                  </a>
                  <a href="javascript:;" className="dropdown-item">
                    <i className="mdi mdi-pencil-outline me-2" />
                    <span><Settings data={e}/> Edit</span>
                  </a>
                  <a
                    href="javascript:;"
                    className="dropdown-item delete-record"
                  >
                    <i className="mdi mdi-delete-outline me-2" />
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </td>*/}
          </tr>
            ))
          }
          
            {/* fin donnees user*/}
           
        </tbody>
      </table>
      <div className="row mx-1">
        <div className="col-sm-12 col-md-6">
          <div
            className="dataTables_info"
            id="DataTables_Table_0_info"
            role="status"
            aria-live="polite"
          >
            Showing 1 to 10 of 50 entries
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="DataTables_Table_0_paginate"
          >
            <ul className="pagination">
              <li
                className="paginate_button page-item previous disabled"
                id="DataTables_Table_0_previous"
              >
                <a
                  aria-controls="DataTables_Table_0"
                  aria-disabled="true"
                  role="link"
                  data-dt-idx="previous"
                  tabIndex={0}
                  className="page-link"
                >
                  Previous
                </a>
              </li>
              <li className="paginate_button page-item active">
                <a
                  href="#"
                  aria-controls="DataTables_Table_0"
                  role="link"
                  aria-current="page"
                  data-dt-idx={0}
                  tabIndex={0}
                  className="page-link"
                >
                  1
                </a>
              </li>
             
              <li
                className="paginate_button page-item next"
                id="DataTables_Table_0_next"
              >
                <a
                  href="#"
                  aria-controls="DataTables_Table_0"
                  role="link"
                  data-dt-idx="next"
                  tabIndex={0}
                  className="page-link"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    
  
</div>
</div>

  </>
  )
}

export default CardListCustomers
