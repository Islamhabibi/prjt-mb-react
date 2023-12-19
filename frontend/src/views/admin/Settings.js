import React, { useEffect } from 'react'
import CardSettings from '../../components/Cards/CardSettings'
import CardProfile from '../../components/Cards/CardProfile'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { GetUser } from '../../components/Redux/Action/TeamAction'

function Settings() {
  const id=useParams()
  console.log(id)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetUser(id.id))
  },[])
  const user = useSelector((state)=> state.team.user)
  console.log(user)
  return (
    <>
    
    {/**************** */}
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4">
        <span className="text-muted fw-light">User / View /</span> Security
      </h4>
      <div className="row">
        {/* User detaille */}
        <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
          {/* User Card */}
          <CardProfile data={user} />
        </div>
        {/* User Content */}
        <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
        <CardSettings data={user} />
        </div>
      </div>
    </div>  
    {/**************** */}
  </>
   
  )
}

export default Settings
