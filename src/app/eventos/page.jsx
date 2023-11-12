'use client'
import React from 'react'
import { useEffect,useState } from 'react'

function page() {
  const [eventos,setEventos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/api/eventos')
    .then(response => response.json())
    .then(data => setEventos(data))
  },[])

  return (
    <div className='flex w-full gap-5 justify-center'>        
        {eventos.map((evento)=>(
            <div key={evento.id} className='border border-gray-300 p-5 rounded-md m-5'>

                <section className='flex gap-3 m-5'>
                <h1 className='text-xl font-bold'>
                    {evento.nombreEvento}
                </h1>
                </section>

                <section className='flex gap-3 m-5'>
                    <h1 className='font-bold'>Fecha:</h1>
                    <h1>
                    {evento.Fecha}
                    </h1>
                </section>

                <section className='flex gap-3 m-5'>
                    <h1 className='font-bold'>Facultad:</h1>
                    <h1>
                    {evento.facultad}
                    </h1>
                </section>

                <section className='flex gap-3 m-5'>
                    <h1 className='font-bold'>programa:</h1>
                    <h1>
                    {evento.programa}
                    </h1>
                </section>

                <section className='flex gap-3 m-5'>
                    <h1 className='font-bold'>ubicacion:</h1>
                    <h1>
                    {evento.ubicacion}
                    </h1>
                </section>                                                     
            </div>           
        ))}
    </div>
  )
}

export default page