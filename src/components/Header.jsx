import React, { useState, useEffect } from "react";
import "boxicons";
import DownloadButton from "./DownloadButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Only fade out when footer is fully visible
          if (entry.intersectionRatio >= 0.95) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.95, // Trigger when 95% of the footer is visible
        rootMargin: '0px' // No margin to ensure precise measurement
      }
    );

    // Start observing the footer
    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    // Cleanup observer on component unmount
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const menuItems = [
    { href: "#hero", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#footer", label: "Contact" },
  ];

  const headerClasses = `sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm transition-opacity duration-300 ${
    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  return (
    <>
      {/* Desktop Header */}
      <header className={`${headerClasses} hidden md:flex justify-between items-center px-6 py-4`}>
        <img
          src="/Green White Professional Minimal Brand Logo.png"
          alt="Brand Logo"
          className="max-h-[38px] w-auto object-contain"
        />
        <nav className="flex gap-8 items-center">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base"
            >
              {item.label}
            </a>
          ))}
          <DownloadButton />
        </nav>
      </header>

      {/* Mobile Header */}
      <header className={`${headerClasses} flex justify-between items-center px-6 py-4 md:hidden`}>
        <img
          src="/Green White Professional Minimal Brand Logo.png"
          alt="Brand Logo"
          className="max-h-[38px] w-auto object-contain"
        />
        <button
          onClick={toggleMenu}
          className="text-gray-600 p-2 z-50 relative"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <div
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></div>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/90 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="px-6 pt-24">
          <nav className="flex flex-col gap-8 text-xl">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-gray-600 hover:text-gray-900 transition-all duration-500 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : "0s" }}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <button
              className={`mt-auto bg-gray-900 text-white py-3 px-4 rounded-lg w-full transition-all duration-500 hover:bg-gray-800 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "300ms" : "0s" }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/RajaVenkatesh_Resume.pdf";
                link.download = "RajaVenkatesh_Resume.pdf";
                link.click();
              }}
            >
              Download Resume
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;