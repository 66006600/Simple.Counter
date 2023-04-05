import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';


// let interval = setInterval(Contador, 10000);

function Contador() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);


    render() {

      return (
        <>
          <span>Seconds Counter: {seconds}</span>

          <button onClick={() => setCount(count + 1)}>Incrementa
          </button>
        </>
      );
    }
  });

}

export default Contador;