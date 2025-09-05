'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import PasswordChange from './password'

const Account = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='w-full sm:w-150 h-auto rounded-lg p-4 bg-white text-black mb-5'>
      <h1 className="mb-3 font-bold text-[17px]"> <strong> Account security </strong> </h1>

      <div className="flex flex-col sm:flex-row justify-between mb-3 gap-2 sm:gap-0">
        <div>
          <h1 className="font-bold"> Password </h1>
          <p className="text-gray-400 text-sm">Last changes 90 days ago</p>
        </div>
        <Button className='bg-[#F59E0B] w-full sm:w-auto' onClick={() => setShowModal(true)}>
          Change
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mb-3 gap-2 sm:gap-0">
        <div>
          <h1 className="font-bold"> Two-Factor Authentication </h1>
          <p className="text-gray-400 text-sm">Recommended for admins</p>
        </div>
        <Button className='bg-red-900 w-full sm:w-auto'>Enable</Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
        <div>
          <h1 className="font-bold"> Active Sessions </h1>
          <p className="text-gray-400 text-sm">Devices logged into your account </p>
        </div>
        <Button className='bg-[#F59E0B] w-full sm:w-auto'>Review</Button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 relative w-[90%] sm:w-[400px]">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <PasswordChange />
          </div>
        </div>
      )}
    </div>
  )
}

export default Account
