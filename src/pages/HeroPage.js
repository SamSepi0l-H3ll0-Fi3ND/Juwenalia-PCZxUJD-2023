import React from "react";
import Navbar from "../components/Navbar";

import { ReactComponent as Logo } from "../components/logos/MainLogo.svg";
const HeroPage = (props) => {
  return (
    <div className="Main__background-img w-full h-screen">
      <Navbar></Navbar>
      <div className="flex justify-center mt-24">
        <Logo />
      </div>
    </div>
  );
};

export default HeroPage;
