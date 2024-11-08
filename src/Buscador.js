import React, { useState } from 'react';

function Buscador() {
  const productos = ['React', 'Bootstrap', 'JavaScript', 'Java', 'Kotlin'];
  const [filtro, setFiltro] = useState('');

  const productosFiltrados = productos.filter((producto) =>
    producto.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {productosFiltrados.map((producto, indice) => (
          <li key={indice}>{producto}</li>
        ))}
      </ul>
    </div>
  );
}

export default Buscador;
