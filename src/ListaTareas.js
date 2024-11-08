import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: 'Tarea 1', completado: false },
    { id: 2, titulo: 'Tarea 2', completado: false },
    { id: 3, titulo: 'Tarea 3', completado: false },
  ]);

  const marcaCompletado = (id) => {
    // Actualizamos solo la tarea que cambia, sin modificar las demás
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completado: !tarea.completado } // Cambiar solo el estado 'completado' de la tarea
          : tarea // Las demás tareas se quedan igual
      )
    );
  };

  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          <input
            type="checkbox"
            checked={tarea.completado}
            onChange={() => marcaCompletado(tarea.id)} // Cambia el estado 'completado'
          />
          {tarea.titulo}
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;

