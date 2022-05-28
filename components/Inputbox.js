import React, { useRef , useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid'
import { db, storage } from '../firebase'
import {collection, getDocs , addDoc, doc, setDoc, serverTimestamp, updateDoc, documentId  } from 'firebase/firestore';
import { ref , uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import {v4} from 'uuid'



function Inputbox() {
    const session = useSession()
    const inputRef = useRef(null)
    const [name ,setName] =useState('')
    const filepickerRef = useRef(null)
    const [ImageUpload, setImageUpload] = useState(null)
    const [ImageToPost, setImageToPost] = useState(null)
    
    
    const sendPost = (e)=>{
          e.preventDefault()
          
          if (!inputRef.current.value) return

          const postsCollectionRef = collection(db , 'posts')
          let id ;

          // upload post data
          addDoc(postsCollectionRef , {
              message:inputRef.current.value,
              name:session.data.user.name,
              email:session.data.user.email,
              usermage:session.data.user.image,
              timestamp:serverTimestamp()
          })

          // get post id
          .then((response)=>{
             id = response._key.path.segments[1]
             console.log(id)
          })

          // upload image
          .then(()=>{
            if(ImageUpload){
              const imageRef = ref(storage , `images/${ImageToPost.name + v4()}`)
              uploadBytes(imageRef , ImageUpload).then((image)=>{
                getDownloadURL(image.ref)
                // set post image url in post data
                .then((url)=>{
                  const postref = doc(db , "posts" , id)
                  updateDoc(postref , {postiamge:url})
                    })
              })
              }
          }).then(()=>alert("done"))
          //  .catch(error => console.log(error.message))
        
          setName("")
          setImageToPost(null)
    }


    const addImageToPost= (e)=>{
      const reader = new FileReader()
      if (e.target.files[0]){
        setImageUpload(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
      }
      reader.onload = (readerEvent) =>{
        setImageToPost(readerEvent.target.result)
      }
    }

    const removeImage = ()=>{
      setImageToPost(null)
    }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md
     text-gray-500 font-medium mt-6'>
      <div className=' flex space-x-4 items-center'>

 
          <Image 
            className=' rounded-full'
            src={session.data.user.image}
            width={40}
            height={40}
            layout="fixed"
        />

          <form className='flex flex-1'>
            <input 
             className=' rounded-full h-12 bg-gray-100 flex-grow
              px-5 focus:outline-none '
             type="text" 
             ref={inputRef}
             value={name}
             onChange={(e)=>setName(e.target.value)}
            //  placeholder ="wahts in your mind"/>
             placeholder={`wahts in your mind, ${session.data.user.name}`}/>

             <button type='submit' onClick={sendPost} className=" p-3 hover:text-white cursor-pointer bg-blue-300 rounded-full shadow-md">Send</button>
           
          </form>

      </div>


      {ImageToPost && (
              <div className='flex flex-1 relative w-full  h-60 mt-2 p-2 transition transform duration-150 '>
                <button onClick={removeImage} className=" text-xl  p-2 hover:bg-red-300 rounded-md absolute top-2 right-4 text-red-500 font-bold">X</button>
                <img src={ImageToPost} alt="" className=' object-fill w-full '/>
              </div>
          )}

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputicon'>
          <VideoCameraIcon className='h-7 text-red-500 '/>
          <p className='text-xs sm:text-sm xl:text-base'>Live Vedio</p>
        </div>

        <div onClick={()=> filepickerRef.current.click()} className='inputicon'>
          <CameraIcon className='h-7 text-green-500'/>
          <p className='text-xs sm:text-sm xl:text-base'>Vedio/Image</p>
          <input ref={filepickerRef} hidden type="file" onChange={addImageToPost}/>
        </div>

        <div className='inputicon'>
          <EmojiHappyIcon className='h-7 text-yellow-500'/>
          <p className='text-xs sm:text-sm xl:text-base'>Emoji</p>
        </div>
      </div>
        
    </div>
  )
}

export default Inputbox