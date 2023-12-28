import React, { useEffect } from 'react'
import CardSettings from '../../components/Cards/CardSettings'
import CardProfile from '../../components/Cards/CardProfile'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { GetUser } from '../../components/Redux/Action/TeamAction'
import FooterAdmin from '../../components/Footers/FooterAdmin'
import AdminNavbar from '../../components/Navbars/AdminNavbar'

function Settings() {
  const id = useParams()
  //console.log(id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetUser(id.id))
  }, [])
  const user = useSelector((state) => state.team.user)
  //console.log(user)
  return (
    <>

      {/**************** */}
      <AdminNavbar />
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">

        </h4>
        <div className="row">

          <CardSettings data={user} />

        </div>
      </div>
      {/**************** */}
      <FooterAdmin />
    </>

  )
}

export default Settings
