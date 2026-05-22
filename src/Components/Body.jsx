import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Foooter";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      {/* Outlet - Any children of the body will render over here. Outlet comes
      from react-routr-dom */}

      <main className="grow">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Body;
