import React from 'react'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon
} from '@heroicons/react/solid'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon

} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
import { useSession } from 'next-auth/react'


function Sidebar() {
    const session = useSession()

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
       {session && <SidebarRow src={session.data.user.image} title={session.data.user.name}/>} 

        <SidebarRow Icon={UserIcon} title={"Friends"}/>
        <SidebarRow Icon={UserGroupIcon} title={"Groups"}/>
        <SidebarRow Icon={ShoppingBagIcon} title={"MarketPlace"}/>
        <SidebarRow Icon={DesktopComputerIcon} title={"watch"}/>
        <SidebarRow Icon={CalendarIcon} title={"Events"}/>
        <SidebarRow Icon={ClockIcon} title={"Memories"}/>
        <SidebarRow Icon={ChevronDownIcon} title={"See More"}/>
    </div>
  )
}

export default Sidebar