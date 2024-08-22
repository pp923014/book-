import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Contact";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
function Contects() {
  return (
    <>

      <Navbar />
      <div className=" min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Contects;
