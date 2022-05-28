import React from 'react'
import {SearchIcon} from '@heroicons/react/outline'
import {DotsHorizontalIcon , VideoCameraIcon} from '@heroicons/react/solid'

const contacts = [
    {src:'stories/1.jpg' , name:"ahmed"},
    {src:'stories/2.jpg' , name:"muhammad"},
    {src:'stories/3.jpg' , name:"jory"},
    {src:'stories/4.jpg' , name:"tamim"},
    {src:'stories/5.jpg' , name:"basma"},
]

function Widgets() {
  return (
    <div className=' hidden lg:flex flex-col w-60  p-2 mt-5'>
        <div className=' flex justify-between items-center text-gray-500 mb-5'>
            <h2 className=' text-xl'>Contacts</h2>
            <div className=' flex space-x-2'>
                < VideoCameraIcon className='h-6'/>
                < SearchIcon className='h-6'/>
                < DotsHorizontalIcon className='h-6'/>
            </div>
        </div>
        {contacts.map((c)=>{
            return (
                <div className=' flex space-x-3 p-3 items-center'>
                    <img src={c.src}  className=" w-10 h-10 rounded-full"/>
                    <p>{c.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Widgets