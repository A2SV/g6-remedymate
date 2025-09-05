import React from 'react'
import Image from 'next/image'

const Administrator = () => {
  return (
    <div className='w-full lg:w-135 h-auto bg-white text-black p-5 rounded-[30px] lg:ml-17'>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
        <Image src="/Profile4.png" alt="admin" width={50} height={50} className="rounded-full" />
        <div>
          <h2 className="text-lg font-semibold flex flex-wrap items-center gap-3 sm:gap-5">
            Abebe Bekele 
            <span className='bg-[#F59E0B] text-black text-xs font-semibold px-3 py-1 rounded-md'>
              Administrator
            </span>
          </h2>
          <p className="text-sm text-gray-400">Manage your personal info and security</p>
        </div>
      </div>

      <hr className="my-4 bg-gray-400 mb-4 text-gray-400" />

      <form className="flex flex-col gap-5">

        <div className="flex flex-col">
          <label htmlFor="displayName" className='text-[14px] font-medium text-gray-400 mb-2'>Display Name</label>
          <input id="displayName" type="text" placeholder='Abebe Bekele' className='w-full sm:w-80 h-9 rounded-lg bg-white/60 border border-white/60 p-2' />
        </div>

    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="text-[14px] font-medium text-gray-400 mb-2">Email</label>
            <input id="email" type="email" placeholder='abebe@remedymate.africa' className="rounded-lg p-2 h-10 bg-white/60 border border-white/60" />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="phone" className="text-[14px] font-medium text-gray-400 mb-2">Phone</label>
            <input id="phone" type="tel" placeholder='+251 911 234 567' className="rounded-lg p-2 h-10 bg-white/60 border border-white/60" />
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col flex-1">
            <label htmlFor="language" className="mb-2 text-[14px] text-gray-400 font-medium">Language</label>
            <select id="language" className="border rounded-lg p-2 bg-white/60 border-white/60">
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="amharic">Amharic</option>
            </select>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="timezone" className="mb-2 text-[14px] text-gray-400 font-medium">Time Zone</label>
            <select id="timezone" className="bg-white/60 border border-white/60 rounded-lg p-2">
              <option value="">Select Time Zone</option>
              <option value="EAT">EAT (UTC+3)</option>
              <option value="UTC">UTC</option>
              <option value="EST">EST (UTC-5)</option>
            </select>
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col">
          <label htmlFor="bio" className="mb-2 text-[14px] text-gray-400 font-medium">Bio</label>
          <textarea id="bio" placeholder="Healthcare technologies focused on safe, accessible guidance" className="bg-white/60 border border-white/60 rounded-lg p-2 w-full" rows={3} />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label htmlFor="location" className="text-[14px] text-gray-400 font-medium mb-2">Location</label>
          <input id="location" type="text" placeholder="Addis Ababa, Ethiopia" className="bg-white/60 border border-white/60 rounded-lg p-2 w-full sm:w-80" />
        </div>

        {/* Organization */}
        <div className="flex flex-col">
          <label htmlFor="organization" className="text-[14px] text-gray-400 font-medium mb-2">Organization</label>
          <input id="organization" type="text" placeholder="RemedyMate" className="bg-white/60 border border-white/60 rounded-lg p-2 w-full sm:w-80" />
        </div>

        {/* Visibility */}
        <div className="flex flex-col">
          <label htmlFor="visibility" className="text-[14px] mb-3 text-gray-400 font-medium">Profile Visibility</label>
          <select id="visibility" className="bg-white/60 border border-white/60 rounded-lg p-2 w-full sm:w-80">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </form>

      <p className="mt-2 text-sm text-gray-400">Controls whether other admins can see your profile.</p>
    </div>
  )
}

export default Administrator
