import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from '../components/Signup'
const Signups = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen">
        <Signup/>
      </div>
      <Footer />
    </div>
  )
}

export default Signups
