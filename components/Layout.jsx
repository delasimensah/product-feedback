import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container h-screen mx-auto text-white bg-black">
      {children}
    </div>
  );
};

export default Layout;
