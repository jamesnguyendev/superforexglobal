import React, { useEffect, useState } from "react";
import Image from "next/image";

const KeenSlider = ({ data }) => {
  const [current, setCurrent] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [data.length]);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-6 transition ease-out duration-500 `} // Updated duration to be more noticeable
        style={{
          transform: `translateX(-${current * 25.5}%)`,
        }}
      >
        {data.map((item, index) => (
          <div
            className="flex items-center gap-5 rounded-lg border min-w-[270px] max-w-[270px] py-2 px-6"
            key={index}
          >
            <Image
              src={item.flag}
              alt={`Slide ${index}`}
              width={30}
              height={30}
              className="object-contain "
            />
            <span className="text-default font-normal">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute hidden">
        {data.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-4 h-4 cursor-pointer ${
              i === current ? "bg-default" : "bg-slate-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default KeenSlider;
