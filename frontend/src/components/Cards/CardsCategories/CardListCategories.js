import { mdiDeleteAlert, mdiEyeSettings, mdiLeadPencil } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteCategorie, GetCategorie, GetCategories } from '../../Redux/Action/CategorieAction'
import CardAddCategorie from './CardAddCategorie'
import CardUpdateCategorie from './CardUpdateCategorie'
import Navbar from '../../Navbars/Navbar'

function CardListCategories() {
 
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetCategories())
    
  },[])
  const userFormState = useSelector((state)=> state.categorie.categories)
  console.log(userFormState)
  return (
    < >
    <Navbar/>
         <div className="container-xxl flex-grow-1 container-p-y">
  {/* Users List Table */}
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">Search Filter</h5>
      <div className="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
        <div className="col-md-4 user_role">
          <select id="UserRole" className="form-select text-capitalize">
            <option value=""> Select Statuts </option>
            <option value="Admin">Admin</option>
            <option value="Author">Author</option>
            <option value="Editor">Editor</option>
            <option value="Maintainer">Maintainer</option>
            <option value="Subscriber">Subscriber</option>
          </select>
        </div>
        <div className="col-md-4 user_plan">
          <select id="UserPlan" className="form-select text-capitalize">
            <option value=""> Select Plan </option>
            <option value="Basic">Basic</option>
            <option value="Company">Company</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Team">Team</option>
          </select>
        </div>
        <div className="col-md-4 user_status">
          <select
            id="FilterTransaction"
            className="form-select text-capitalize"
          >
            <option value=""> Select Status </option>
            <option value="Pending" className="text-capitalize">
              Pending
            </option>
            <option value="Active" className="text-capitalize">
              Active
            </option>
            <option value="Inactive" className="text-capitalize">
              Inactive
            </option>
          </select>
        </div>
      </div>
    </div>
    <div className="card-datatable table-responsive">
      <div
        id="DataTables_Table_0_wrapper"
        className="dataTables_wrapper dt-bootstrap5 no-footer"
      >
        <div className="row mx-1">
          <div className="col-md-2 d-flex align-items-center justify-content-md-start justify-content-center">
            <div className="dt-action-buttons">
              <div className="dt-buttons">
                <button
                  className="dt-button buttons-collection dropdown-toggle btn btn-label-secondary"
                  tabIndex={0}
                  aria-controls="DataTables_Table_0"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                >
                  <span>
                    <i className="mdi mdi-export-variant me-1" />{" "}
                    <span className="d-none d-sm-inline-block">Export</span>
                  </span>
                  <span className="dt-down-arrow">▼</span>
                </button>{" "}
              </div>
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
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search.."
                      aria-controls="DataTables_Table_0"
                    />
                  </label>
                </div>
              </div>
              <div className="add-new">
              <CardAddCategorie data={userFormState}/>
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
                Name
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
                Description
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
                    
                  </div>
                </div>
              </td>
              <td>
                <span>{e.Description}</span>
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
                <span class="badge rounded-pill bg-label-secondary"
                 text-capitalized=""
                 >
                  Inactive</span>
                }
                
              </td>
              <td>
                <div className="d-inline-block text-nowrap">
                <span onClick={()=>dispatch(DeleteCategorie(e._id))}><Icon path={mdiDeleteAlert} size={1} /></span>
                <span>
                  <Link to={`/settings-categ/${e._id}`}>
                  <Icon  path={mdiLeadPencil} size={1} />
                   </Link>
                   
                   </span>  
                <Link to={`/settings/${e._id}`}><Icon path={mdiEyeSettings} size={1} /></Link>

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

export default CardListCategories
