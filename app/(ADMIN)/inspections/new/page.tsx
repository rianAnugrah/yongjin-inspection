import AlarmDisplay from '@/app/shared/alarm-display'
import CrudEXAmple from '@/app/shared/crud-example'
import AlarmForm from '@/app/shared/inspect-form'
import { InspectionTypeSelect } from '@/app/shared/inspection-type-select'
import TopBar from '@/app/shared/topbar'
import UnderConstruction from '@/app/shared/under-construction'
import UserDropdown from '@/app/shared/user-dropdown'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function InspectionPage() {
  return (
    <div>
           <TopBar heading="Inspection" items={[{label: "New"}]}/>
      

    
      <div className="flex w-full flex-col lg:flex-row gap-2 overflow-auto h-[calc(100dvh_-_180px)] lg:h-[calc(100dvh_-_89px)] p-8">
          <div className='w-1/3 border border-[#282a2c] rounded flex flex-col relative'>
            <p className='absolute bg-[#1b1c1d] h-6 -top-5 left-2 p-2 font-bold'>Inspect for</p>
            <ScrollArea className='block w-full h-[calc(100dvh_-_220px)]'>
              <div className='flex p-4 justify-end'>
                <div className='block w-[180px]'></div>
                <InspectionTypeSelect />
              </div>
              <AlarmDisplay />
            </ScrollArea>
          </div>
          <div className='w-2/3 border border-[#282a2c] rounded flex flex-col relative'>
            <p className='absolute bg-[#1b1c1d] h-6 -top-5 left-2 p-2 font-bold'>Inspection task</p>
            <ScrollArea className='block w-full '>
              <AlarmForm />
            </ScrollArea>
          </div>
      </div>
    </div>
  )
}
