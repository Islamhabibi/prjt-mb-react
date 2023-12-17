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
  const user = useSelector((state)=> state.user)
  console.log(user)
  return (
    <>
    <div className="row">
     <div className="w-full lg:w-4/12 px-4">
     <CardProfile data={user} />
      </div>
      <div className="w-full lg:w-4/12 px-4">
         <CardSettings data={user} />
        </div>
    </div>
  </>
  )
}

export default Settings
