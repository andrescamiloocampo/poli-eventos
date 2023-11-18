'use client'
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Event({nombreEvento,Fecha,facultad,programa,ubicacion,id,descripcion,categorias,checkuser}) {  
  return (
    <div className="w-full border border-gray-300 p-5 rounded-md m-5 hover:bg-gray-50 cursor-pointer">            
      <section className="flex gap-3 m-5 items-center">
        <h1 className="text-xl font-bold">{nombreEvento}</h1>
        {checkuser && <AiFillCheckCircle className="text-green-400 text-xl"/>}
      </section>
      <section className="flex gap-3 m-5">
        <h1 className="font-bold">Fecha:</h1>
        <h1>{Fecha}</h1>
      </section>
      <section className="flex gap-3 m-5">
        <h1 className="font-bold">Facultad:</h1>
        <h1>{facultad}</h1>
      </section>
      <section className="flex gap-3 m-5">
        <h1 className="font-bold">programa:</h1>
        <h1>{programa}</h1>
      </section>
      <section className="flex gap-3 m-5">
        <h1 className="font-bold">ubicacion:</h1>
        <h1>{ubicacion}</h1>
      </section>
      <section className="flex gap-3 m-5">
        <h1 className="font-bold">descripcion:</h1>
        <h1>{descripcion}</h1>
      </section>
      <section className="flex gap-3 m-5">
        <h1 className="font-bold">categorias:</h1>
        <h1>{categorias}</h1>
      </section>
    </div>
  );
}

export default Event;
