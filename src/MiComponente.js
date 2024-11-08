import React from 'react';
import App from './App';

function MiComponente() {

    let contador_1=0;
    let contador_2=0;
    

  const handleClick = (event) => {

    
    if (event.target.id == "boton1" ){
        contador_1++;
        event.target.textContent = "Has pulsado el boton "+ contador_1 + "veces";
  }
  else{
        contador_2++;
        event.target.textContent = "Has pulsado el boton "+ contador_2 + "veces"
  }   
  };

  return (
    <>
    <button onClick = {(e)=>handleClick(e)} id="boton1">Haz clic aquí</button>
    <button onClick = {(e)=>handleClick(e)} id="boton2">Haz clic aquí</button>
    </>
  );
}


export default MiComponente;