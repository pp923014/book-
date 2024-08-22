import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }; 
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto  md:px-20 px-4">
        <div className="mt-19 items-center justify-center text-center">
       
        <h1 className="text-2xl  md:text-4xl pt-28">
        "We're thrilled to welcome you {" "}
            <span className="text-pink-500"> here! 🎉"! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to a space where knowledge and inspiration come together. Whether you're here to learn something new, explore different perspectives, or simply find your next great read, we're excited to be a part of your journey. Dive in and discover the endless possibilities that await you. We're here to support and inspire you every step of the way!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
