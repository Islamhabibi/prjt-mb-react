import React from 'react'
import CardSettings from '../../components/Cards/CardSettings'
import CardProfile from '../../components/Cards/CardProfile'

function Settings() {
  return (
    <>
    <div className="row">
     <div className="w-full lg:w-4/12 px-4">
     <CardProfile />
      </div>
      <div className="w-full lg:w-4/12 px-4">
         <CardSettings />
        </div>
    </div>
  </>
  )
}

export default Settings
