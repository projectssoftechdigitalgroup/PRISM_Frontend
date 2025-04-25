import React from 'react'
import AuthForm from '../components/auth/AuthForm'

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4  flex flex-col md:flex-row items-center justify-center gap-6">
      <div className='text-center  -mt-5'>
      <img src="/logo.png" alt="logo" className="w-72 mx-auto  mb-1"/>
      <p className='text-white md:ms-8 ms-auto me-auto max-w-xs md:max-w-none text-sm md:text-base -mt-20'>Get personalized recommendations for Restaurants and Books</p>
      </div>
    <AuthForm/>
    </div>
  )
}

export default Auth