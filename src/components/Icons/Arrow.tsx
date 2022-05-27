import React from "react";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle
        id="arrow-circle"
        cx={24}
        cy={24}
        r={23}
        stroke="#FFD200"
        strokeWidth={2}
      />
      <path
        id="arrow-right"
        d="M22 29.5L27 24.5L22 19.5"
        stroke="#2D2D2D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
