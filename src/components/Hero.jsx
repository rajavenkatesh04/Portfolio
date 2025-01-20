import React from "react";

function Hero() {
  return (
    <div id="hero" className="min-h-screen bg-[#ffffff] flex flex-col justify-center px-6">
      <div className="max-w-4xl">
        <img
          src="/Raja.png"
          alt="Photo"
          className="w-32 h-32 rounded-full mb-6"
        />
        <h1 className="text-4xl font-bold text-[#2a2a28] leading-tight font-[Manrope] mb-4">
          I'm Raja, a Java & Full-Stack developer specializing in creating
          user-friendly & minimalistic websites based in Chennai, India.
        </h1>
        <p className="text-lg text-[#4a4a45] leading-relaxed font-[Manrope]">
          Leveraging expertise in modern web technologies, I focus on building
          sleek and efficient solutions that prioritize performance and user
          experience.
        </p>
      </div>
    </div>
  );
}

export default Hero;
