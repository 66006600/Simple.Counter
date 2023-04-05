import React, { useState } from 'react';



function Contador() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <>
      <span>El valor de counter esta en: {count} </span>

      <button onClick={() => setCount (count + 1)}>Incrementa
      </button>
    </>
  );
}

export default Contador;