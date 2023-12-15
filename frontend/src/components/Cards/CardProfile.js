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
          <span className="fw-medium mx-2">Status:</span> <span>Active</span>
        </li>
        <li className="d-flex align-items-center mb-3">
          <i className="mdi mdi-star-outline mdi-24px" />
          <span className="fw-medium mx-2">Role:</span> <span>Developer</span>
        </li>
        <li className="d-flex align-items-center mb-3">
          <i className="mdi mdi-flag-outline mdi-24px" />
          <span className="fw-medium mx-2">Country:</span> <span>USA</span>
        </li>
        <li className="d-flex align-items-center mb-1">
          <i className="mdi mdi-translate mdi-24px" />
          <span className="fw-medium mx-2">Languages:</span>{" "}
          <span>English</span>
        </li>
      </ul>
      <small className="card-text text-uppercase">Contacts</small>
      <ul className="list-unstyled my-3 py-1">
        <li className="d-flex align-items-center mb-3">
          <i className="mdi mdi-phone-outline mdi-24px" />
          <span className="fw-medium mx-2">Contact:</span>{" "}
          <span>(123) 456-7890</span>
        </li>
        <li className="d-flex align-items-center mb-3">
          <i className="mdi mdi-message-outline mdi-24px" />
          <span className="fw-medium mx-2">Skype:</span> <span>john.doe</span>
        </li>
        <li className="d-flex align-items-center mb-1">
          <i className="mdi mdi-email-outline mdi-24px" />
          <span className="fw-medium mx-2">Email:</span>{" "}
          <span>john.doe@example.com</span>
        </li>
      </ul>
      <small className="card-text text-uppercase">Teams</small>
      <ul className="list-unstyled mb-0 mt-3 pt-1">
        <li className="d-flex align-items-center mb-3">
          <div className="d-flex flex-wrap">
            <span className="fw-medium me-2">Backend Developer</span>
            <span>(126 Members)</span>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <div className="d-flex flex-wrap">
            <span className="fw-medium me-2">React Developer</span>
            <span>(98 Members)</span>
          </div>
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
