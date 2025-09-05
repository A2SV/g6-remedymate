import React from 'react'

const Activity = () => {
  return (
    <div className='w-full sm:w-150 h-auto rounded-lg border border-gray-300 p-4 bg-white mb-5'>
      <h3 className='text-black font-bold text-[17px] mb-3'>Recent Activity</h3>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 text-black">
        <div className="flex-1 sm:w-35 h-20 rounded-[15px] bg-white/70 border border-gray-200 text-center">
          <p className='mt-3 text-gray-400 text-[13px]'>Edit this week</p>
          <h1 className='font-bold text-[21px]'>12</h1>
        </div>

        <div className="flex-1 sm:w-35 h-20 rounded-[15px] bg-white/70 border border-gray-200 text-center">
          <p className='mt-3 text-gray-400 text-[13px]'>Logins</p>
          <h1 className='font-bold text-[21px]'>2</h1>
        </div>

        <div className="flex-1 sm:w-35 h-20 rounded-[15px] bg-white/70 border border-gray-200 text-center">
          <p className='mt-3 text-gray-400 text-[13px]'>Flag updates</p>
          <h1 className='font-bold text-[21px]'>3</h1>
        </div>
      </div>

      <hr className="my-4 bg-gray/70" />

      <div className="text-black p-3 border bg-white/70 border-gray-200 rounded-2xl w-full sm:w-110 text-center">
        Usage charts appear here based on your activity
      </div>
    </div>
  )
}

export default Activity
