import React from "react";
import Hero from "../components/Hero";
import Client from "../components/Client";
import Product from "../components/Product";
import Pag from "../components/Pag";
import Call from "../components/Call";
import Contact from "../components/Contact";
import CustomerRender from "../components/CustomerRender";

function Main() {
  return (
    <div id="main">
      <Hero />
      {/* <Client /> */}
      <Product />
      <CustomerRender />
      {/* <Pag/>   */}
      {/* <Call/> */}
      <Contact />
    </div>
  );
}

export default Main;
