import React, { useState } from "react";

function Number() {
  
  let [num, setNum] = useState(0);

  const plus = () => {
    setNum(++num);
  };
  const minus = () => {
    setNum(--num);
  };

  return (
    <>
      <div className="d-flex align-items-center mt-5 flex-column">
        <h1 className="bg-secondary py-4 px-5 rounded">{num}</h1>
        <div className="mt-5 d-flex gap-4">
          <button
            onClick={minus}
            id="minus"
            className="p-3 bg-warning text-black shadow rounded"
          >
            -
          </button>
          <button
            onClick={plus}
            id="plus"
            className="p-3 bg-danger text-black shadow rounded"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Number;
