import { mdiDeleteAlert,  mdiLeadPencil } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteCategorie, GetCategorie, GetCategories } from '../../Redux/Action/CategorieAction'
import CardAddCategorie from './CardAddCategorie'
import FooterAdmin from '../../Footers/FooterAdmin'
import AdminNavbar from '../../Navbars/AdminNavbar'

function CardListCategories() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCategories())
  }, [])
  const userFormState = useSelector((state) => state.categorie.categories)
  //console.log(userFormState)
  return (
    < >
      <AdminNavbar/>
      <div className="container-xxl flex-grow-1 container-p-y" style={{ marginBottom: "4%" }}>
        {/* Users List Table */}
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Category list</h5>

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

                    </div>
                    <div className="add-new " style={{ marginBottom: "1%" }}>
                      {/**pour afficher liste des categories  */}
                      <CardAddCategorie data={userFormState} />
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
                    userFormState?.map((e) => (
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
                          {(e.Status) ?
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
                            <span onClick={() => dispatch(DeleteCategorie(e._id))}><Icon path={mdiDeleteAlert} size={1} /></span>
                            <span>
                              <Link to={`/admin/settings-categ/${e._id}`}>
                                <Icon path={mdiLeadPencil} size={1} />
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
      <FooterAdmin />
    </>
  )
}

export default CardListCategories
