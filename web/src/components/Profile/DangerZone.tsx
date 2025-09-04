import React from 'react'
import { Button } from '../ui/button'

const DangerZone = () => {
  return (
    <div className='w-150 h-60 rounded-lg border bg-white/50 p-4 text-black'>
      <h1 className="mb-3 font-black">Danger zone</h1>
      <p className="text-gray-900 mb-3 text-[15px]"> Proceed with caution-- these actions are irreversible</p>
      <div className="flex justify-between mb-3 p-2 border rounded-[17px]">
        <div className="">
            <h1 className='font-bold'>Deactivate Account</h1>
            <p className='text-gray-700 text-sm'>Temporarily disable access</p>
        </div>
        <Button className='bg-yellow-700'>Deactivate</Button>
      </div>

      <div className="flex justify-between p-2 border  rounded-[17px]">
        <div className="">
            <h1 className='font-bold'>Delete Account</h1>
            <p className='text-gray-700 text-sm'>Permanently remove your data</p>
        </div>
        <Button className='bg-red-700'>Delete</Button>
      </div>
    </div>
  )
}

export default DangerZone
