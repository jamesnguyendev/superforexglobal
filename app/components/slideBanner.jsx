"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Banner from "./banner";

const SlideImage = ({ slides, nav }) => {
  const [current, setCurrent] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // useEffect to set up the automatic sliding every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-500`} // Updated duration to be more noticeable
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <Banner
            key={index}
            imgDesktop={s.imgDesktop}
            imgMobile={s.imgMobile}
            titleBanner={s.titleBanner}
            subTitleBanner={s.subTitleBanner}
            buttonName={s.buttonName}
            textBannerColor={s.textBannerColor}
          />
        ))}
      </div>
      {nav ? null : (
        <div className="py-2 md:py-6 flex justify-center gap-3 w-full">
          {slides.map((_, i) => (
            <div
              onClick={() => setCurrent(i)}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer ${
                i === current ? "bg-default" : "bg-slate-300"
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideImage;
