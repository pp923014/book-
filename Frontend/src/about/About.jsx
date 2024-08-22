import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <AboutUs/>
      </div>
      <Footer />
    </>
  )
}

export default About
