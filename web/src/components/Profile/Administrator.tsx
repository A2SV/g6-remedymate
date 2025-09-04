import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const Administrator = () => {
  return (
    <div className='w-140 h-180 bg-white text-black p-5 rounded-[30px]'>
        <div className="flex gap-2 ">
            <Image src="/admin.png" alt="admin" width={50} height={50} className="rounded-full" />
            <div>
                <h2 className="text-lg font-semibold flex items-center gap-2">Abebe Bekele <Button className='ml-6'>Administrator</Button></h2>
                <p className="text-sm text-gray-500">Manage your personal info and security</p>
            </div>
        </div>
        <hr className="my-4" />
        <form action=" flex flex-col gap-5">
            <div className=" flex flex-col mb-3">
                <label htmlFor="displayName" className='text-sm font-medium '>Dispaly Name</label>
                <input id="displayName" type="text" placeholder='Abebe Bekele' />
            </div>

            <div className="flex gap-7 mb-3">
                <div className="flex flex-col flex-1">
                    <label htmlFor="email" className="text-[16px] font-medium">Email</label>
                    <input id="email" type="email" placeholder='abebe@remedymate.africa' className="rounded-lg p-2" />
                </div>

                <div className="">
                    <label htmlFor="phone" className="text-[16px] font-medium" >Phone</label>
                    <input id='phone' type="tel" className="rounded-lg p-2" placeholder='+251 911 234 567' />
                </div>
            </div>

            <div className="flex gap-5 mb-3">
                <div className="flex flex-col flex-1">
                    <label htmlFor="language" className="mb-1 text-[16px] font-medium">
                        Language
                    </label>
                    <select
                        id="language"
                        name="language"
                        className="border rounded-lg p-2"
                    >
                        <option value="">Select Language</option>
                        <option value="english">English</option>
                        <option value="amharic">Amharic</option>
                    </select>
                </div>

                <div className="flex flex-col flex-1">
                    <label htmlFor="timezone" className="mb-1 text-[16px] font-medium">
                        Time Zone
                    </label>
                    <select
                        id="timezone"
                        name="timezone"
                        className="border rounded-lg p-2"
                    >
                        <option value="">Select Time Zone</option>
                        <option value="EAT">EAT (UTC+3)</option>
                        <option value="UTC">UTC</option>
                        <option value="EST">EST (UTC-5)</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col mb-3">
                <label htmlFor="bio" className="mb-1 text-[16px] font-medium">
                    Bio
                </label>
                <textarea
                    id="bio"
                    name="bio"
                    placeholder="Healthcare technologies focused on safe, accessible guidance"
                    className="border rounded-lg p-2"
                    rows={3}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="location" className="text-[16px] font-medium">
                    Location
                </label>
                <input
                    id="location"
                    type="text"
                    name="location"
                    placeholder="Addis Ababa, Ethiopia"
                    className="border rounded-lg p-2"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="organization" className="text-[16px] font-medium">
                    Organization
                </label>
                <input
                    id="organization"
                    type="text"
                    placeholder="RemedyMate"
                    className="border rounded-lg p-2"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="visibility" className="text-[16px] font-medium">
                    Profile Visibility
                </label>
                <select
                    id="visibility"
                    name="visibility"
                    className="border rounded-lg p-2"
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>
        </form>
        <p className="mt-2">controls whether other admins can see your profile.</p>
    </div>
  )
}

export default Administrator
