'use client'
import React from 'react'
import { useEffect,useState } from 'react'

function page() {
  const [paises,setPaises] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3000/api/paises')
    .then(response => response.json())
    .then(data => setPaises(data))
  },[])

  return (
    <div className='flex flex-col items-center gap-3 justify-center w-full bg-slate-600'>
        {paises.map((pais)=>(
            <div key={pais.codigo} className='container flex flex-col justify-center items-center bg-slate-100'>   
                <h1>{pais.codigo}</h1> 
                <h1>{pais.nombre}</h1>
            </div>
        ))}
    </div>
  )
}

export default page