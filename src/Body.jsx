import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Foooter";

const Body = () => {
  return (
    <div>
      <NavBar></NavBar>
      Body
      {/* Outlet - Any children of the body will render over here. Outlet comes
      from react-routr-dom */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Body;
