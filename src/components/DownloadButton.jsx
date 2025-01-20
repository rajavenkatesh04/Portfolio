import React, { useState } from "react";

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Reset the click effect after 2 seconds
    setTimeout(() => {
      setIsClicked(false);
    }, 2000); // Revert after 2 seconds
  };

  return (
    <button
      className={`text-gray-600 transition-all duration-200 border border-gray-600 rounded-lg px-4 py-2 text-base relative overflow-hidden 
        ${isClicked ? ' bg-lightgreen text-white' : 'bg-white'}`}
      onClick={() => {
        handleClick();
        const link = document.createElement("a");
        link.href = "/RajaVenkatesh_Resume.pdf";
        link.download = "RajaVenkatesh_Resume.pdf";
        link.click();
      }}
    >
      <span className="block">Download my resume</span>
      <span className="absolute top-0 left-0 w-full h-full text-white flex items-center justify-center transform translate-x-full transition-all duration-300 hover:translate-x-0">
        Get my CV now!
      </span>
    </button>
  );
};

export default Button;
