import React, { useState, useEffect } from "react";

const images = ["C.pnj.jpeg", "img.pnj.jpg", "photo.webp"];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[90vh] relative overflow-hidden mb-7">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center px-4 md:px-8">
        <div className="text-white max-w-xl text-center">

        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
