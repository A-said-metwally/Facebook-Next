import React, {useState} from 'react'
import Image from 'next/image'
import { ThumbUpIcon, ThumbDownIcon , ChatAltIcon, ShareIcon, DotsHorizontalIcon}  from '@heroicons/react/solid'

function Post({id , message, name, postimage , userimage , timestamp}) {
  const [Like, setLike] = useState(true)
  return (
    <div className='flex flex-col mt-5 rounded-2xl shadow-md bg-white'>
      {/* top section */}
      <div className='flex justify-between  p-2'>
        <div className='flex items-center space-x-2'>
          <div className='flex relative items-center space-x-2'>
            <Image className=' rounded-full'
              src="/stories/2.jpg"
              // src={userimage}
              alt="userimage" 
              width={40} 
              height={40} 
            />
          </div>
            <p className=' text-medium'>{name}</p>
            <p className=' text-xs text-gray-400'>
              {new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
        {/* post option */}
        <div><DotsHorizontalIcon className='h-6'/></div>
      </div>
      {/* post data */}
      <p className=' p-2 pt-4'>{message}</p>
      {postimage &&
        <div className=' h-56 md:h-96 bg-white'>
          {/* <Image src={postimage} height={60} width={60}/> */}
          <img className=' w-full max-h-full '
              src={postimage}
              alt="userimage" 
              width={40} 
              height={40} 
            />
        </div>
      }

      {/* post footer */}
      <div className='flex justify-between items-center rounded-b-2xl bg-white
       shadow-md text-gray-400 border-t'>
         
        <div className=' inputicon rounded-none' onClick={()=>setLike(!Like)}>
          {Like ? <ThumbUpIcon className='h-6'/> : <ThumbDownIcon className='h-6'/>}
          <p className='text-xs sm:text-base'>Like</p>
        </div>

        <div className=' inputicon rounded-none'>
          <ChatAltIcon className='h-6'/>
          <p className='text-xs sm:text-base'>Comment</p>
        </div>

        <div className=' inputicon rounded-none'>
          <ShareIcon className='h-6'/>
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post