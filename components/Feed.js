import React from 'react'
import Inputbox from './Inputbox'
import Stories from './Stories'
import Posts from './Posts'

function Feed() {
  return (
    <div className='flex-grow h-screen gb-44 pt-6 mr-4
     xl:mr-40 overflow-auto'>
        <div className=' mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
            <Stories/>
            <Inputbox/>
            <Posts/>
        </div>
    </div>
  )
}

export default Feed