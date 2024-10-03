"use client";//turn component into client side component

import Image from "next/image";
import CustomButton from "./CustomButton";
import { use } from "react";
import { CustomButtonProps } from "@/types";


const Hero = () => {
    const handleScroll = () => {};


  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
            Find, book, or rent a vehicle - Quick and Easy <br />
        </h1>
        <p className="hero__subtitle">
            We offer the best vehicles for you to rent or buy at the best prices. <br /> </p>
      {/* Make button reusable by passing in this.props. */}
      <CustomButton
            title="Explore"
            containerStyle="bg-primary-blue 
            text-white rounded-full mt-10"
            handleClick={handleScroll}
      />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
            <Image
                src="/hero.png"
                alt="Hero"
                fill className="object-contain"  
            /> 
            </div>
            <div className="hero__image-overlay"/>
        </div>

      
    </div>
  )
}

export default Hero
