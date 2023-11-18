"use client";
import React from "react";
import { useEffect, useState } from "react";
import Event from "../components/Event";
import Link from "next/link";

function page() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/eventos")
      .then((response) => response.json())
      .then((data) => setEventos(data));
  }, []);

  return (
    <div className="flex flex-col w-full gap-5 items-center justify-center">
      {eventos.map((evento) => (
      <Link href={`/eventos/${evento._id}`} key={evento.id} className="w-1/2">
          <Event
            nombreEvento={evento.nombreEvento}
            Fecha={evento.Fecha}
            facultad={evento.facultad}
            programa={evento.programa}
            ubicacion={evento.ubicacion}
            id={evento._id}
            descripcion={evento.descripcion}
            categorias={evento.categorias?.toString().replace(/,/g, ' ')}
          />          
      </Link>
      ))}
    </div>
  );
}

export default page;
