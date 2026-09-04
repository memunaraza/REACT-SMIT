import React, { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
      <h3>Quantity: {count}</h3>
      
      {/* State update karne ke buttons */}
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '5px' }}>
        + Increase
      </button>

      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        - Decrease
      </button>

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;