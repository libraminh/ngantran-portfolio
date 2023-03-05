import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

const BaseLoader = () => {
  return (
    <div className="fixed w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-10">
      <ClimbingBoxLoader color="white" />
    </div>
  );
};

export default BaseLoader;
