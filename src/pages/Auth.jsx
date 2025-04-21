import React from 'react'
import AuthForm from '../components/auth/AuthForm'

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4 flex items-center justify-center">
      <img src="/logo.png" alt="logo" className="w-72 mx-auto mb-6"/>
    <AuthForm/>
    </div>
  )
}

export default Auth