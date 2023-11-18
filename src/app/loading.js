import React from "react";

function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <svg
        className="spinner animate-rotate"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path stroke-current"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );
}

export default Loading;