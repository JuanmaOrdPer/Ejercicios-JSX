import React, { useState} from "react";

function Toggle() {
 
 const [visible, setVisibilidad] = useState(false);

 return (
  <div>
    {visible && (
        <p>¡Este es un elemento que se puede mostrar u ocultar!</p>)}
  <button onClick={()=>setVisibilidad(!visible)}>
      {visible ? 'Ocultar' : 'Mostrar'}Texto
    </button>

  </div>
);
};
export default Toggle;
