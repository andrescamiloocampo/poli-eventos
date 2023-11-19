"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Event from "@/app/components/Event";
import { useUserContext } from "@/app/context/userContext";
import { useRouter } from "next/navigation";
import { useEventContext } from "@/app/context/eventContext";
import axios from "axios";

function page() {
  const params = useParams();
  const [id, setId] = useState(params.id);
  const [evento, setEvento] = useState({});
  const [suscribed, setSuscribed] = useState(false);
  const { user, setUser } = useUserContext();
  const { event, setEvent } = useEventContext();
  const [users, setUsers] = useState([]);
  const [comentario, setComentario] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:8080/eventos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvento(data);
      });
  }, []);

  useEffect(() => {
    setUsers(evento.usuarios);
  }, [evento]);

  const inscripcion = () => {
    const requestData = {
      identificador: user.identificacion,
      nombres: user.nombres,
      apellidos: user.apellidos,
      email: user.email,
      tipo_empleado: user.tipo_empleado,
    };
    axios.put(`http://localhost:8080/eventos/${id}`, requestData);
  };

  const eliminar = () => {
    axios
      .delete(`http://localhost:8080/eventos/${id}`)
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(router.push("/"));
  };

  const actualizar = () => {
    setEvent(evento);
    router.push("/");
  };

  const comentar = () => {
    const requestData = {
      name: user?.nombres,
      lastname: user?.apellidos,
      comentario: comentario,
    };
    axios
      .post(`http://localhost:8080/eventos/${id}`, requestData)
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(router.replace(`http://localhost:3000/eventos/${id}`));
      
  };
  return (
    <main className="w-full h-screen flex justify-center">
      <section className="w-1/2 flex flex-col items-center">
        {user && (
          <div className="flex gap-3 m-3 items-center">
            <h1 className="text-xl font-semibold">Usuario:</h1> {user?.nombres}
          </div>
        )}
        <Event
          nombreEvento={evento.nombreEvento}
          Fecha={evento.Fecha}
          facultad={evento.facultad}
          programa={evento.programa}
          ubicacion={evento.ubicacion}
          descripcion={evento.descripcion}
          categorias={evento.categorias?.toString().replace(/,/g, " ")}
          id={evento.id}
          checkuser={users?.some(
            (u) =>
              u.identificador === user?.identificacion &&
              u.nombres === user?.nombres &&
              u.apellidos === user?.apellidos &&
              u.email === user?.email &&
              u.tipo_empleado === user?.tipo_empleado
          )}
        />
        <button
          onClick={() => {
            inscripcion();
          }}
          className="bg-grey-lightest m-5 border-2 border-dashed rounded border-black p-2 font-semibold text-black"
        >
          Inscribirse al evento
        </button>
        <article className="flex">
          <button
            type="button"
            className="text-red-700 hover:text-white border 
            border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none
            focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
            dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 
            dark:focus:ring-red-900"
            onClick={() => {
              eliminar();
            }}
          >
            Eliminar evento
          </button>

          <button
            type="button"
            className="text-blue-700 
      hover:text-white border border-blue-700 
      hover:bg-blue-800 focus:ring-4 focus:outline-none 
      focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
      text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 
      dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            onClick={() => actualizar()}
          >
            Actualizar evento
          </button>
        </article>

        <article className="w-full border border-gray-300 h-96 rounded-md m-6 flex flex-col items-center">
          <h1 className="text-xl m-3 text-black ">Comentarios</h1>
          <article className="overflow-y-scroll bg-gray-100 h-52 w-full">            
            {evento.comentarios &&
              evento.comentarios.map((comentario, index) => (
                <article key={index} className="flex flex-col bg-white m-3 p-2 rounded-md border border-gray-600">
                  <h1 className="text-xm font-semibold">{comentario.name} {comentario.lastname}</h1>                
                  <p>{comentario.comentario}</p>                  
                </article>
              ))}
          </article>
          <article className="flex w-full">
            <input
              type="text"
              placeholder="Ingresar comentario"
              className="w-4/5 border border-b-gray-300"
              onChange={(e) => setComentario(e.target.value)}              
            />
            <button
              className="bg-blue-500 text-white p-2 font-semibold w-1/5 "
              onClick={() => comentar()}
            >
              Enviar
            </button>
          </article>
        </article>
      </section>
    </main>
  );
}

export default page;
