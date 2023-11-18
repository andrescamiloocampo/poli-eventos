"use client";
import { useState, useEffect } from "react";
import axios from "axios";

function FormularioEmpleado() {
    const [identificacion, setId] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [tipo_contratacion, setTipo_contratacion] = useState("");
    const [tipo_empleado, setTipo_empleado] = useState([]);
    const [cod_facultad, setCod_facultad] = useState([]);
    const [codigo_sede, setCodigo_sede] = useState([]);
    const [lugar_nacimiento, setLugar_nacimiento] = useState("");
    const [facultades,setFacultades] = useState([])
    const [sedes,setSedes]= useState([])
    const [selectedValue,setSelectedValue] = useState("");
    const [tiposDeContratacion,setTiposDeContratacion] = useState([]); 
    const [tipoDeEmpleados,setTiposDeEmpleados] = useState([]);
    const [facultad,setFacultad] = useState(""); 
    const [sede,setSede] = useState(""); 
    const [ciudad,setCiudad] = useState("");
    const [ciudades,setCiudades] =useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/facultades")
          .then((response) => response.json())
          .then((data) => setFacultades(data));
      }, []);
    
      useEffect(() => {
        fetch("http://localhost:3000/api/tipo_contratacion")
          .then((response) => response.json())
          .then((data) => setTiposDeContratacion(data));
      }, []);
    
      useEffect(() => {
        fetch("http://localhost:3000/api/tipo_empleado")
          .then((response) => response.json())
          .then((data) => setTiposDeEmpleados(data));
      }, []);

      useEffect(() => {
        fetch("http://localhost:3000/api/sedes")
          .then((response) => response.json())
          .then((data) => setSedes(data));
      }, []);

      useEffect(() => {
        fetch("http://localhost:3000/api/ciudades")
          .then((response) => response.json())
          .then((data) => setCiudades(data));
      }, []);
    

    const handleformularioEmpleado = (e) => {
        e.preventDefault();
        console.log("formulario2");
        console.log(identificacion, nombres, apellidos, email, tipo_contratacion, tipo_empleado, cod_facultad, codigo_sede,lugar_nacimiento);
        const requestData = {
          identificacion,
          nombres,
          apellidos,
          email,
          tipo_contratacion,
          tipo_empleado,
          cod_facultad,
          codigo_sede,
          lugar_nacimiento
        };
        axios.post('http://localhost:3000/api/register',requestData)
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
              placeholder="Ingrese identificacion"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <input
             className="p-2 border border-gray-300 rounded-md"
             type="text"
             placeholder="Ingrese nombres"
             onChange={(e) => {
               setNombres(e.target.value);
              }}
            />

            <input
             className="p-2 border border-gray-300 rounded-md"
             type="text"
             placeholder="Ingrese apellidos"
             onChange={(e) => {
               setApellidos(e.target.value);
              }}
            />

            <input
             className="p-2 border border-gray-300 rounded-md"
             type="text"
             placeholder="Ingrese un Email valido"
             onChange={(e) => {
               setEmail(e.target.value);
              }}
            />

            <select
              className="p-2 border border-gray-300 rounded-md"
              name=""
              id=""
              onChange={(e) => {
                setSelectedValue(e.target.value);
                tiposDeContratacion.map((tc) => {
                  if (tc.nombre == e.target.value) {
                    setTipo_contratacion(tc.nombre);
                  }
                });
              }}
            >
              <option value="">Seleccione un tipo de contratacion</option>
              {tiposDeContratacion.map((tc) => (
                <option key={tc.nombre} value={tc.nombre}>
                  {tc.nombre}
                </option>
              ))}
            </select>

            <select
              className="p-2 border border-gray-300 rounded-md"
              name=""
              id=""
              onChange={(e) => {
                setSelectedValue(e.target.value);
                tipoDeEmpleados.map((te) => {
                  if (te.nombre == e.target.value) {
                    setTipo_empleado(te.nombre);
                  }
                });
              }}
            >
              <option value="">Seleccione un tipo de empleado</option>
              {tipoDeEmpleados.map((te) => (
                <option key={te.nombre} value={te.nombre}>
                  {te.nombre}
                </option>
              ))}
            </select>

            <select
              className="p-2 border border-gray-300 rounded-md"
              name=""
              id=""
              onChange={(e) => {
                setCod_facultad(e.target.value);
              }}
            >
              <option value="">seleccione la facultad</option>
              {facultades.map((f) => {
                
                  return (
                    <option key={f.codigo} value={parseInt(f.codigo)}>
                      {f.nombre}
                    </option>
                  );
                
              })}
            </select>

            <select
              className="p-2 border border-gray-300 rounded-md"
              name=""
              id=""
              onChange={(e) => {
                setCodigo_sede(e.target.value);
              }}
            >
              <option value="">seleccione la Sede</option>
              {sedes.map((sede) => {
               
                  return (
                    <option key={sede.codigo} value={parseInt(sede.codigo)}>
                      {sede.nombre}
                    </option>
                  );
                
              })}
            </select>

            <select
             className="p-2 border border-gray-300 rounded-md"
             type="text"
             placeholder="Ingrese el lugar de nacimiento"
             onChange={(e) => {
               setLugar_nacimiento(e.target.value);
              }}
            >
              <option value="">seleccione su lugar de nacimiento</option>
              {ciudades.map((ciudad) => {
               
                  return (
                    <option key={ciudad.codigo} value={parseInt(ciudad.codigo)}>
                      {ciudad.nombre}
                    </option>
                  );
                
              })}



            </select>
            <button
              className="bg-transparent hover:bg-blue-500
             text-blue-700 font-semibold hover:text-white py-2 px-4 
             border border-blue-500 hover:border-transparent rounded"
              onClick={(e) => handleformularioEmpleado(e)}
            >
              Registrarse
            </button>
          </form>
        </div>
      );
}

export default FormularioEmpleado;