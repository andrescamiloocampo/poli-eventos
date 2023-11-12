"use client";
import { useState, useEffect } from "react";
import axios from "axios";

function Form() {
  const [Fecha, setFecha] = useState("");
  const [nombreEvento, setnombreEvento] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [facultades, setFacultades] = useState([]);
  const [programas, setProgramas] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [textoCategorias, setTextoCategorias] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [facultad, setFacultad] = useState("");
  const [programa, setPrograma] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/facultades")
      .then((response) => response.json())
      .then((data) => setFacultades(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/programas")
      .then((response) => response.json())
      .then((data) => setProgramas(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/areas")
      .then((response) => response.json())
      .then((data) => setAreas(data));
  }, []);

  const handleform = (e) => {
    e.preventDefault();
    console.log("formulario");
    console.log(nombreEvento, Fecha, facultad, programa, ubicacion, categorias);
    const requestData = {
      nombreEvento,
      Fecha,
      facultad,
      programa,
      ubicacion,
      categorias,
    };
    axios.post('http://localhost:8000',requestData)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  };

  return (
    <div className="w-full flex justify-center h-screen items-center">
      <form className="flex flex-col w-1/2 gap-5 p-5 m-5 border border-gray-300 rounded-md">
        <h1 className="text-2xl font-semibold">Poli Eventos</h1>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Ingrese el nombre del evento"
          onChange={(e) => {
            setnombreEvento(e.target.value);
          }}
        />
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="date"
          name=""
          id=""
          onChange={(e) => {
            setFecha(e.target.value);
          }}
        />
        <select
          className="p-2 border border-gray-300 rounded-md"
          name=""
          id=""
          onChange={(e) => {
            setSelectedValue(e.target.value);
            facultades.map((facultad) => {
              if (facultad.codigo == e.target.value) {
                setFacultad(facultad.nombre);
              }
            });
          }}
        >
          <option value="">Seleccione una facultad</option>
          {facultades.map((facultad) => (
            <option key={facultad.codigo} value={facultad.codigo}>
              {facultad.nombre}
            </option>
          ))}
        </select>
        <select
          className="p-2 border border-gray-300 rounded-md"
          name=""
          id=""
          onChange={(e) => {
            setPrograma(e.target.value);
          }}
        >
          <option value="">Seleccione Programa</option>
          {programas.map((programa) => {
            if (programa.AREAS_codigo == selectedValue) {
              return (
                <option key={programa.codigo} value={programa.nombre}>
                  {programa.nombre}
                </option>
              );
            }
          })}
        </select>
        <select
          className="p-2 border border-gray-300 rounded-md"
          name=""
          id=""
          onChange={(e) => {
            setUbicacion(e.target.value);
          }}
        >
          <option value="">ubicacion</option>
          {facultades.map((facultad) => {
            if (facultad.codigo == selectedValue) {
              return (
                <option key={facultad.codigo} value={facultad.ubicacion}>
                  {facultad.ubicacion}
                </option>
              );
            }
          })}
        </select>
        <textarea
          className="p-2 border border-gray-300 rounded-md"
          name=""
          id=""
          placeholder="Ingrese las categorías separadas por espacio"
          cols="30"
          rows="3"
          onChange={(e) => {
            setTextoCategorias(e.target.value);
            setCategorias(textoCategorias.split(" "));
          }}
        ></textarea>
        <button
          className="bg-transparent hover:bg-blue-500
         text-blue-700 font-semibold hover:text-white py-2 px-4 
         border border-blue-500 hover:border-transparent rounded"
          onClick={(e) => handleform(e)}
        >
          Ingresar evento
        </button>
      </form>
    </div>
  );
}

export default Form;
