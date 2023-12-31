import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser, GetUsersTeam } from '../Redux/Action/TeamAction'
import Icon from '@mdi/react';
import { Link, Route, Routes } from 'react-router-dom';
import { mdiDeleteAlert, mdiEyeSettings, mdiLeadPencil } from '@mdi/js';
import CardAddTeam from './CardAddTeam';
import Navbar from '../Navbars/Navbar';
import FooterAdmin from '../Footers/FooterAdmin';
import AdminNavbar from '../Navbars/AdminNavbar';
function CardListUseres() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetUsersTeam())
  },[])
  const userFormState = useSelector((state)=> state.team.users)
  //console.log(userFormState)
  return (
    <>
    <AdminNavbar/>
    
      <div className="container-xxl flex-grow-1 container-p-y">
  {/* Users List Table */}
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">Team list</h5>
      <div className="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
         
       
      </div>
    </div>
    <div className="card-datatable table-responsive">
      <div
        id="DataTables_Table_0_wrapper"
        className="dataTables_wrapper dt-bootstrap5 no-footer"
      >
        <div className="row mx-1">
          <div className="col-md-2 d-flex align-items-center justify-content-md-start justify-content-center">
            
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
              <CardAddTeam/>
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
                User
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
                Role
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
                      <span className="fw-medium">{e.FullName}</span>
                    </a>
                    <small>@{e.UserName}</small>
                  </div>
                </div>
              </td>
              <td>
                <span>{e.Email}</span>
              </td>
              <td>
                <span className="text-truncate d-flex align-items-center">
                  <i className="mdi mdi-chart-donut mdi-20px text-success me-2" />
                  {e.Profile}
                </span>
              </td>
              
              <td>
                {(e.isEnabled)?
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
                <span onClick={()=>dispatch(DeleteUser(e._id))}><Icon path={mdiDeleteAlert} size={1} /></span>
                  <Link to={`/admin/settings-team/${e._id}`}>
                    <Icon path={mdiLeadPencil} size={1} />
                  </Link>
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

export default CardListUseres
