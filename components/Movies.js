import React, { useEffect, useState } from 'react'
import {collection , getDocs} from 'firebase/firestore'
import { db } from '../firebase'

function Movies() {
    const [Movies , setMovies] = useState([])
   
    useEffect(()=>{
        getMovies()
    },[])

    // useEffect(()=>{
    //     console.log(Movies)
    // },[Movies])
    
    function getMovies(){
        const movieCollectionRef = collection(db , 'movies')
        getDocs(movieCollectionRef)
         .then(response =>{
            const movs = response.docs.map(doc => (
               {
                  data:doc.data(),
                  id:doc.id,
                }
                ))
                setMovies(movs)
         }).catch(error =>console.log(error.message))
     }

  return (
    <div>
      <h4>list Movies</h4>
      <button className='bg-green-600 text-white p-3 rounded-full' onClick={()=>getMovies()}>Refresh</button>
        <ul>
          {Movies.map((mov)=>{
            return (
              <li key={mov.id}>
                {mov.id} ** {mov.data.name}
                <button>Delete</button>
              </li>
              )
          })}
        </ul>
    </div>
  )
}

export default Movies