import React, { useState, useEffect } from 'react';


// let interval = setInterval(Contador, 10000);

function Contador() {
 
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    
    
      return (
        <div>
          <span>Seconds Counter: {seconds}</span>
          <h1>Seconds Counter: {seconds}</h1>
          
        </div>
      );
    
  });

}

export default Contador;