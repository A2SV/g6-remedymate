
import React from 'react'
import { Button } from '../ui/button'

const Account = () => {
  return (
    <div className='w-150 h-60 rounded-lg p-6 bg-white text-black'>
      <h1 className="mb-3"> <strong> Account security </strong>  </h1>
      <div className="flex justify-between mb-3">
        <div className="">
            <h1 className="font-bold"> Password </h1>
            <p className="text-gray-500 text-sm">Last changes 90 days ago</p>
        </div>
        <Button className='bg-yellow-400' >Change</Button>
      </div>

      <div className="flex justify-between mb-3">
        <div className="">
            <h1 className="font-bold"> Two-Factor Authentication </h1>
            <p className="text-gray-500 text-sm">Recommended for admins</p>
        </div>
        <Button className='bg-red-400'>Enable</Button>
      </div>

      <div className="flex justify-between">
        <div className="">
            <h1 className="font-bold"> Active Sessions </h1>
            <p className="text-gray-500 text-sm">Devices logged into your account </p>
        </div>
        <Button className='bg-yellow-400'>Review</Button>
      </div>
    </div>
  )
}

export default Account
