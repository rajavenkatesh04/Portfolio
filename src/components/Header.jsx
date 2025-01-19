import React, { useState } from 'react';
import { X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const menuItems = [
    { href: "#projects", label: "Projects", delay: "100" },
    { href: "#resume", label: "Resume", delay: "150" },
    { href: "#about", label: "About me", delay: "200" }
  ];

  return (
    <>
      {/* Desktop Header */}
      <div className="relative">
        <header className="hidden md:flex justify-between items-center px-6 py-4">
          <div className="text-xl font-normal">Raja Venkatesh</div>
          <nav className="flex gap-8">
            {menuItems.map(item => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Use this template
            </button>
          </nav>
        </header>
        <div className="h-px bg-gray-200 w-full" />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden relative">
        {/* Fixed Header */}
        <header className="bg-white">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="text-xl font-normal">Raja Venkatesh</div>
            <button 
              onClick={toggleMenu}
              className="text-gray-600 p-2 z-50 relative"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>
          <div className="h-px bg-gray-200 w-full" />
        </header>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="fixed top-0 left-0 right-0 bg-white">
            <div className="flex justify-between items-center px-6 py-4">
              <div className="text-xl font-normal">Raja Venkatesh</div>
              <div className="w-10 h-10" /> {/* Spacer to maintain layout */}
            </div>
            <div className="h-px bg-gray-200 w-full" />
          </div>
          
          <div className="px-6 pt-24"> {/* Added padding top to account for fixed header */}
            <nav className="flex flex-col gap-8 text-xl">
              {menuItems.map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`text-gray-600 hover:text-gray-900 transition-all duration-500 transform ${
                    isMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : '-translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0s'
                  }}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className={`mt-auto bg-gray-900 text-white py-3 px-4 rounded-lg w-full transition-all duration-500 hover:bg-gray-800 transform ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? '300ms' : '0s'
                }}
              >
                Use this template
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;