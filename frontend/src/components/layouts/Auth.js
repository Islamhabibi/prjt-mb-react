import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Admin from './Admin'
import Login from '../../views/auth/Login'
import Register from '../../views/auth/Register'
import Index from '../../views/Index'

function Auth() {
  return (
    <>
      <main>
        <section className='relative w-full h-full py-40 min-h-screen'>
            <div 
                className='absolute top-0 h-full bg-blueGray-800 bg-no-repeat bg-full'>

            </div>
            <Routes>
                 
                <Route path='/auth/login' element={<Login/>}/>
                <Route path='/auth/register' element={<Register/>}/>
                <Route path='/auth'  element={<Navigate to="/auth/login" />}/>
            </Routes>
        </section>
      </main>
    </>
  )
}

export default Auth
