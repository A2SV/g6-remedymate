import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 mt-5 px-3'>
      <h1 className="font-bold text-2xl mb-3 sm:mb-0">Profile Management</h1>

      <div className="flex gap-2 flex-wrap">
        <Button className='bg-[#F59E0B] w-full sm:w-auto'>Discard</Button>
        <Button className='bg-red-900 w-full sm:w-auto'>Save Profile</Button>
      </div>
    </div>
  )
}

export default Header
