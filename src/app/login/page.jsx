'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useUserContext } from '../context/userContext'
import { useRouter } from 'next/navigation'

function Login() {
  const {user,setUser} = useUserContext()  
  const [email,setEmail] = useState("")  
  const [id,setId] = useState("")      
  const router = useRouter()
  const handleLogin = (e) =>{    
    e.preventDefault();
    const requestData = {
        identificacion:id,
        email:email
    }
    axios.post('http://localhost:3000/api/login',requestData)
    .then(data => {
        setUser(data.data)
        console.log(data.data)
        router.push('/eventos')        
    })
    .catch(error => console.log(error))
  }  

  return (    
    <div className='w-full h-[90vh] flex flex-col items-center justify-center'>        
        <form action="" onSubmit={(e)=>handleLogin(e)} 
        className='flex flex-col text-center w-1/2 p-5 border 
        border-gray-300 rounded-md gap-6 bg-white'>
            <h1 className='text-xl font-semibold'>Iniciar sesión</h1>
            <input className='p-2 border border-gray-300 rounded-md' type="text" placeholder='Ingrese su correo'                
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input className='p-2 border border-gray-300 rounded-md' type="text" placeholder='Ingrese su identificación'                
                onChange={(e)=>setId(e.target.value)}
            />
            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                Iniciar sesión
            </button>
        </form>
    </div>
  )
}

export default Login