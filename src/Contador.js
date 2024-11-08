import React, { useState } from 'react';
import App from './App';

function Contador() {
    const[contador, setContador]= useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );

}


export default Contador;