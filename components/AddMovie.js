import React, { useState } from 'react'
import {collection , addDoc} from 'firebase/firestore'
import { db } from '../firebase'

function AddMovie() {
    const [name ,setName] =useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(name === ''){
            return
        }
        const movieCollectionRef = collection(db , 'movies')
        addDoc(movieCollectionRef , {name})
        .then(response => {
            console.log(response)
        }).catch(error => {console.log(error.message)})

        // alert(name)
    }

  return (
    <div className=' mt-6'>
        <h1 className=' text-lg'>AddMovie</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Movie Name</label>
        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Add Movie</button>
    </form>
    </div>
  )
}

export default AddMovie