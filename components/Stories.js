import React from 'react'
import Image from 'next/image'
import StoryCard from './StoryCard'

const stories = [
  {
    name:"ahmed",
    src:"/stories/1.jpg",
    profile:"/stories/1.jpg"
  },
  {
    name:"muhammad",
    src:"/stories/2.jpg",
    profile:"/stories/1.jpg"
  },
  {
    name:"jory",
    src:"/stories/3.jpg",
    profile:"/stories/1.jpg"
  },
  {
    name:"tamim",
    src:"/stories/4.jpg",
    profile:"/stories/10.jpg"
  },
  {
    name:"basma",
    src:"/stories/5.jpg",
    profile:"/stories/10.jpg"
  },
]


function Stories() {
  return (
    <div className='flex justify-center space-x-3
     mx-auto'>
       {stories.map(story=>(
         <StoryCard  key={story.src} name={story.name} src={story.src} profile={story.profile}/>
       ))}
    </div>
  )
}

export default Stories