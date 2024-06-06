import React from "react";
import Ok from "./Ok";
const ShapeDivider = () => {
  return (
   <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-1/2 bg-gray-200"></div>
        <div className="w-full h-1/2 bg-red-200"></div>
        <Ok/>
      </div>
   </>
  );
};

export default ShapeDivider;
