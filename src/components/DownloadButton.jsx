import React, { useState } from "react";

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Reset the click effect after 2 seconds
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`relative z-10 border border-gray-600 rounded-lg px-6 py-3 flex items-center justify-center space-x-3 transition-all duration-200 
          ${isClicked ? "bg-lightgreen text-white" : "bg-white text-gray-600 group"}`}
        onClick={() => {
          handleClick();
          const link = document.createElement("a");
          link.href = "/RajaVenkatesh_Resume.pdf";
          link.download = "RajaVenkatesh_Resume.pdf";
          link.click();
        }}
      >
        {/* Icon */}
        <span
          className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:scale-110"
          style={{ fontSize: "20px" }}
        >
          download
        </span>

        {/* Text */}
        <span className="text-sm font-medium">Download Resume</span>
      </button>

      {/* Hover Overlay */}
      <span
        className="absolute inset-0 bg-lightgreen rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      ></span>
    </div>
  );
};

export default Button;
