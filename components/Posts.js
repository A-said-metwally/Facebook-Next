import React , {useState , useEffect} from 'react'
import Post from './Post'
import {doc, collection, onSnapshot , deleteDoc} from 'firebase/firestore'
import { db } from '../firebase'
import Image from 'next/image'

function Posts() {

  const [Posts, setPosts] = useState([])

  useEffect(()=>{
    const postsCollectionRef = collection(db , 'posts' )
    const reltime = onSnapshot(postsCollectionRef , snapshot =>{
      setPosts(snapshot.docs.map(doc => (
        { id:doc.id, data : doc.data()})
        ))
    })
    return ()=>{
      reltime()
    }
  },[])

  console.log(Posts.data)
  return (
    <div>
      
      {Posts.map((post)=>{
        return (
          <Post
            id={post.id}
            message={post.data.message}
            name={post.data.name}
            email={post.data.email}
            userimage={post.data.usermage}
            postimage={post.data.postiamge}
            timestamp={post.data.timestamp}
          />
        )
      })}

    </div>
  )
}

export default Posts