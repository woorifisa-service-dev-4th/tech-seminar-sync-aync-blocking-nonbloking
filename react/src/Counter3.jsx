import React, { useState, useEffect } from 'react';
import './styles.css';

function Counter3() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 2);
  };

  useEffect(() => {
    console.log(`Updated count: ${count}`);
  });

  return (
    <div className="counter-card">
      <h3 className="counter-title">충돌과 상태 변경 문제 해결</h3>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter3;
