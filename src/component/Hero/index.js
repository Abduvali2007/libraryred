import React, { useState } from "react";
import img from "../../assets/img/image 112.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Hero = () => {
  const { products } = useSelector((s) => s);
  return (
    <div id="hero">
      <img src={img} alt="img" />
      <div className="container">
        <div className="hero">
          <div className="hero--nav">
            <h1>
              <FaArrowLeftLong />
            </h1>
          </div>
          <div className="hero--nav__right">
            <h1>
              <FaArrowRightLong />
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-[30px] mt-10">
          {products.map((el) => (
            <ProductCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
