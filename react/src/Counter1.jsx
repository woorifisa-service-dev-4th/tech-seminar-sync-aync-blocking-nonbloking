import React, { useState } from 'react';
import './styles.css';

function Counter1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 2);
    console.log(count);
  };

  return (
    <div className="counter-card">
      <h3 className="counter-title">초기 코드</h3>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter1;
