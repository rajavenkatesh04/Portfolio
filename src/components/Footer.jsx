import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white font-['Manrope']">
      {/* Main CTA Section */}
      <div className="w-full px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Interested in connecting?
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-8">
            Let's talk projects, collaborations, or anything design!
          </p>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105">
            Book a call
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
            <span className="text-lg font-semibold">RajaVenkatesh</span>
            <nav className="flex gap-6 text-zinc-400">
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#resume" className="hover:text-white transition-colors">Resume</a>
              <a href="#about" className="hover:text-white transition-colors">About me</a>
              <a href="#licensing" className="hover:text-white transition-colors">Licensing</a>
            </nav>
          </div>

          {/* Right side - Social Links */}
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
              <Globe size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-6 py-6 text-zinc-500 text-sm border-t border-zinc-800">
          Copyright © {new Date().getFullYear()} by RajaVenkatesh
        </div>
      </div>
    </footer>
  );
};

export default Footer;