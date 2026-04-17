'use client'
import React from "react";
import {motion, Variants} from "framer-motion";
import SubscribeInput from "./SubscribeInput";

export default function Hero(){
    const hero = '/images/hero.png' // Adjust the path as necessary
    const heading = 'Discover Your Home Awaits'

    const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between each word animation
      },
    },
  };

  const wordVariants : Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
    return (
        <div className="bg-secondary relative w-full overflow-hidden">
            <div className="hero relative pt-20 md:py-20 min-h-screen flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                            <video src={'/videos/hero.mp4'} loop muted autoPlay className="w-full h-fll object-cover" />
                </div>

                <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/0 bg-transparent z-10" />

                <div className="container mx-auto px-4 z-10">
                    <div className="max-w-2xl">
                        <motion.div
                            className="text-white text-4xl md:text-5xl font-bold pb-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                            >
                            {heading.split(" ").map((word, index) => (
                                <motion.h1 className="text-white text-[90px] leading-8 md:leading-18" key={index} variants={wordVariants}>
                                {word}
                                </motion.h1>
                            ))}
                            </motion.div>
                        <p className="text-white md:text-1xl">These should help convey a sense of aspiration and possibility, which are often associated with the real estate market.</p>
                        <SubscribeInput />
                    </div>
                </div>
                
            </div>
        </div>
    );
}                         