import React from "react";

const Navigation = () => {
  return (
    <div className="flex lg:block md:space-x-5 lg:space-x-0 lg:space-y-5 ">
      <div className="flex-1 h-10 md:rounded-lg md:h-40 bg-violet"></div>

      <div className="flex-1 hidden h-40 bg-white rounded-lg md:block"></div>

      <div className="flex-1 hidden h-40 bg-white rounded-lg md:block "></div>
    </div>
  );
};

export default Navigation;
