import React, { useState } from 'react';


function FormularioSimple(){
 // Estado para gestionar el nombre del usuario
const [nombre, setNombre] = useState('');
const [cambio, setCambio] = useState('');

// Manejador de cambio en el campo de texto
const anadirNombre= (event) =>
{
  event.preventDefault();
  setCambio  ("Bienvenido, " + nombre )
}

// Manejador para el envío del formulario
const handleSubmit = (e) => {
  e.preventDefault();  // Evitar el comportamiento por defecto del formulario
  setCambio(true);   // Cambiar el estado a que el formulario ha sido enviado
};

return (
  <div>
    <h1>{cambio}</h1>
    <form onSubmit= {anadirNombre}>
    <label> Nombre:
    <input type='text' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
    </label>
    <button type="submit">Enviar</button>
    </form>
  </div>
);
};

export default FormularioSimple
