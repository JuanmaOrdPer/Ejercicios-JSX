import React from 'react';

function Saludo(props) {
  return <h1>¡Hola, {props.nombre} {props.apellido}!</h1>;
}

export default Saludo;
