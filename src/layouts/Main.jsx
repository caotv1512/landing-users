import React from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
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
