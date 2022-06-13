import React from "react";
const Spinner = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen fixed bg-gray-700 bg-opacity-100 z-30'>
      <div id="container">
      <svg viewBox="0 0 100 100">
    <defs>
      <filter id="shadow">
        <feDropShadow dx={0} dy={0} stdDeviation={1.5} floodColor="#81F9CB" />
      </filter>
    </defs>
    <circle
      id="spinner"
      style={{
        fill: "transparent",
        stroke: "#81F9CB",
        strokeWidth: 7,
        strokeLinecap: "round",
        filter: "url(#shadow)",
      }}
      cx={50}
      cy={50}
      r={45}
    />
  </svg>
      </div>
    </div>
  );
};

export default Spinner;
