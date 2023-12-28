import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { GetUser, getcurrent } from '../Redux/Action/TeamAction'
import AdminNavbar from '../Navbars/AdminNavbar'
import FooterAdmin from '../Footers/FooterAdmin'

function CardProfile() {
 
  //console.log(id)
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(getcurrent())
  }, [])
  const user= useSelector((state)=> state.team.user)
  //console.log(user)
  //console.log(user)
  return (
    <>
    <AdminNavbar />
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">

        </h4>
        <div className="row">
      {/* About User */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="user-avatar-section">
            <div className=" d-flex align-items-center flex-column">
              <img
                className="img-fluid rounded mb-3 mt-4"
                src={user.Avatar}
                height={120}
                width={120}
                alt="User avatar"
              />
              <div className="user-info text-center">
                <h4>{user.FullName}</h4>
                <span className="badge bg-label-danger rounded-pill">
                  {user.Profile}
                </span>
              </div>
            </div>
          </div>
          <h5 className="pb-3 border-bottom mb-3">Details</h5>
          <div className="info-container">
            <ul className="list-unstyled mb-4">
              <li className="mb-3">
                <span className="h6">Username: </span>
                <span> {user.UserName}</span>
              </li>
              <li className="mb-3">
                <span className="h6">Email: </span>
                <span> {user.Email}</span>
              </li>
              <li className="mb-3">
                <span className="h6">Phone: </span>
                <span>(+216) {user.Phone}</span>
              </li>
              <li className="mb-3">
                <span className="h6">Role: </span>
                <span>{user.Profile}</span>
              </li>
              <li className="mb-3">
                <span className="h6">Status: </span>
                {(user.isEnabled) ?
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
              </li>
              </ul>
          </div>
          <div className="mt-4">
              <a href={`/admin/settings-team/${user._id}`} type="submit" className="btn btn-primary me-2">
                Update profile
              </a>
             </div> 
        </div>
      </div>
      </div>
        </div>
      {/*/ About User */}
      {/* Profile Overview */}
      {/*/ Profile Overview */}

<FooterAdmin/>

    </>
  )
}

export default CardProfile
