import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-zinc-900 text-white font-['Manrope']">
      {/* Main CTA Section */}
      <div className="w-full px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
            Like what you see? Let's connect!
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-8 text-center">
            Let's talk projects, collaborations, or anything design!
          </p>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 mb-8">
            Connect
          </button>

          <div className="flex justify-center w-full">
            
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800">
        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-6 py-6 text-zinc-500 text-sm border-t border-zinc-800">
          <div className="flex items-center justify-center gap-2">
            Copyright   © {new Date().getFullYear()}   by
            <img
              src="/FooterLogoLight.png"
              alt="Brand Logo"
              className="h-6 w-auto object-contain inline-block"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;