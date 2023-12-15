import React, { useState } from 'react';

function FunctionState() {
  /**
   * @param(counter, setCounter)
   */

  const [counter, SetCounter] = useState(0);
  console.log(counter, SetCounter);

  const handleAddOne = () => {
    SetCounter(prevcounter => prevcounter + 1);
  };

  return (
    <div>
      <h2 className="text-danger">Le Function State</h2>
      <p>{counter}</p>
      <button className="btn btn-warning" onClick={handleAddOne}>
        Incrementer le Function state
      </button>
    </div>
  );
}

export default FunctionState;
