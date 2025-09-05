import React from 'react'
import Account from '@/components/Profile/Account'
import Administrator from '@/components/Profile/Administrator'
import Activity from '@/components/Profile/Activity'
import DangerZone from '@/components/Profile/DangerZone'
import Header from '@/components/Profile/Header'

const profilePage = () => {
  return (
    <div className="px-3 sm:px-5 md:px-10">
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10">
        
        <Administrator />

        <div className="flex flex-col gap-5">
          <Account />
          <Activity />
          <DangerZone />
        </div>
      </div>
    </div>
  )
}

export default profilePage
