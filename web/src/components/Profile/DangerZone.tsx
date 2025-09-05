import React from 'react'
import { Button } from '../ui/button'

const DangerZone = () => {
  return (
    <div className='w-full sm:w-150 h-auto rounded-lg border bg-white p-4 text-black'>
      <h1 className="mb-3 font-bold text-[17px]">Danger zone</h1>
      <p className="text-gray-400 mb-3 text-[15px]">Proceed with caution -- these actions are irreversible</p>

      {/* Deactivate */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 p-2 border rounded-[17px] gap-2 sm:gap-0">
        <div>
          <h1 className='font-bold'>Deactivate Account</h1>
          <p className='text-gray-400 text-sm'>Temporarily disable access</p>
        </div>
        <Button className='bg-[#F59E0B] w-full sm:w-auto'>Deactivate</Button>
      </div>

      {/* Delete */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 border rounded-[17px] gap-2 sm:gap-0">
        <div>
          <h1 className='font-bold'>Delete Account</h1>
          <p className='text-gray-400 text-sm'>Permanently remove your data</p>
        </div>
        <Button className='bg-red-900 w-full sm:w-auto'>Delete</Button>
      </div>
    </div>
  )
}

export default DangerZone
