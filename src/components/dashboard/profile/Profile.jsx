import React from 'react'
import Cards from './Cards'

const Profile = () => {
  return (
    <>
    <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
        See recommendations based on your category interview
      </p>
      <div className='grid grid-cols-3 gap-4'>

      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
    </>
  )
}

export default Profile