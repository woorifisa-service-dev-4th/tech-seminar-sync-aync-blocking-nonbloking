import React, { useState } from 'react';
import './styles.css';

function Counter2() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 2);
    console.log(count);
  };

  return (
    <div className="counter-card">
      <h3 className="counter-title">충돌 문제 해결</h3>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter2;
