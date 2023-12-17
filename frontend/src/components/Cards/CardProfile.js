import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { GetUser } from '../Redux/Action/TeamAction'

function CardProfile() {
  const id=useParams()
  console.log(id)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetUser(id.id))
  },[])
  const user = useSelector((state)=> state.user)
  console.log(user)
  return (
    <>
  {/* About User */}
  <div className="container-xxl flex-grow-1 container-p-y">
  <div className="card mb-4">
    <div className="card-body">
      <small className="card-text text-uppercase">About</small>
      <ul className="list-unstyled my-3 py-1">
        <li className="d-flex align-items-center mb-3">
          <i className="mdi mdi-account-outline mdi-24px" />
          <span className="fw-medium mx-2">Full Name:</span>{" "}
          <span>{user.FullName}</span>
        </li>
        <li className="d-flex align-items-center mb-3">
          <i className="mdi mdi-check mdi-24px" />
          <span className="fw-medium mx-2">Status:</span> 
          {(user.isEnabled)?
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
         </li>
        <li className="d-flex align-items-center mb-3">
          <i className="mdi mdi-star-outline mdi-24px" />
          <span className="fw-medium mx-2">Role:</span> <span>{user.Profile}</span>
        </li>
        
      </ul>
      <small className="card-text text-uppercase">Contacts</small>
      <ul className="list-unstyled my-3 py-1">
        <li className="d-flex align-items-center mb-3">
          <i className="mdi mdi-phone-outline mdi-24px" />
          <span className="fw-medium mx-2">Phone:</span>{" "}
          <span>(216) {user.Phone}</span>
        </li>
         
        <li className="d-flex align-items-center mb-1">
          <i className="mdi mdi-email-outline mdi-24px" />
          <span className="fw-medium mx-2">Email:</span>{" "}
          <span>{user.Email}</span>
        </li>
      </ul>
      
    </div>
  </div>
  </div>
  {/*/ About User */}
  {/* Profile Overview */}
  {/*/ Profile Overview */}



    </>
  )
}

export default CardProfile
