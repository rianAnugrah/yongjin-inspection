import UnderConstruction from '@/app/shared/under-construction'
import UserDropdown from '@/app/shared/user-dropdown'
import React from 'react'

export default function ReportPage() {
  return (
    <div>
      <div className="border-b-2 w-full py-4 flex items-center justify-between">
        <p className="font-bold text-3xl">Report</p>
        <UserDropdown />
      </div>

      <UnderConstruction />
    </div>
  )
}
