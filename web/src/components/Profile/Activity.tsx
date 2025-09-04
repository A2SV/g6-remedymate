
import React from 'react'

const Activity = () => {
  return (
    <div className='w-150 h-60 rounded-lg border border-gray-300 p-4 bg-white/50'>
      <h3 className='text-black'>Recent Activity</h3>
      <div className="flex gap-10 text-black p-4 text-center">
        <div className="w-35 h-20 rounded-[5px] bg-white rounded-[15px]">
            <p className='mt-3'>Edit this week</p>
            <h1 className='font-bold text-[19px]'>12</h1>
        </div>

        <div className=" w-35 h-20 rounded-[5px] bg-white rounded-[15px] ">
            <p className='mt-3'>Logins</p>
            <h1 className='font-bold text-[19px]'>2</h1>
        </div>

        <div className=" w-35 h-20 rounded-[5px] bg-white rounded-[15px] ">
            <p className='mt-3'>Flag updates</p>
            <h1 className='font-bold text-[19px]'>3</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="ml-7 text-black h-15 w-140 p-6"> Usage charts apppers here based on your activity</div>
    </div>
  )
}

export default Activity
