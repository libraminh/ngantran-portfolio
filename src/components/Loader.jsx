import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

const BaseLoader = () => {
  return (
    <div className="fixed w-full h-full flex items-center justify-center bg-[#ff4f93] z-10">
      <ClimbingBoxLoader />
    </div>
  );
};

export default BaseLoader;
