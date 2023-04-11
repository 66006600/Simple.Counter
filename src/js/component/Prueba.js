import React, { useState, useEffect } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const digitOne = counter % 10;
      const digitTwo = Math.floor(counter / 10) % 10;
      const digitThree = Math.floor(counter / 100) % 10;
      const digitFour = Math.floor(counter / 1000) % 10;
      setCounter(counter => counter + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Container bg-dark">
      <div className="Row">
        <div className="Col">
          <div className="calendar">
            <i className="bi bi-clock"></i>
          </div>
          <div className="col">{digitFour % 10}</div>
          <div className="col">{digitThree % 10}</div>
          <div className="col">{digitTwo % 10}</div>
          <div className="col">{digitOne % 10}</div>
        </div>
      </div>
    </div>
  );
}

export default Counter;