import React, { useRef, useEffect, useState } from 'react';

function FormularioAutoenfocado() {
    const [nombre, setNombre] = useState("Juanma")
  const nombreInput = useRef(null);
  const submit = useRef(null);

  useEffect(() => {
    
    nombreInput.current.focus();
    submit.textContext= "nuevo Valor"
  }, [nombre, setNombre]);

  return (
    
    <form>
        <p>{nombre}</p>
      <input type="text" ref={nombreInput} placeholder="Ingrese su nombre" />
      <button type="submit" ref={submit}>Enviar</button>
    </form>
  );
}
export default FormularioAutoenfocado;
