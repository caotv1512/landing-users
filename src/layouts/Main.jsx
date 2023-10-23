import React from "react";
import Hero from "../components/Hero";
import Client from "../components/Client";
import Product from "../components/Product";
import Pag from "../components/Pag";
import Call from "../components/Call";
import Contact from "../components/Contact";

function Main() {
  return (
    <div id="main">
      <Hero />
      {/* <Client /> */}
      <Product/>
      {/* <Pag/>   */}
      {/* <Call/> */}
      <Contact/>
    </div>
  );
}

export default Main;
