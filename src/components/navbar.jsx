import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Code, FolderGit2, Mail, Award } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skill", "achievements", "experience", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skill", icon: Code },
    { name: "Achievements", href: "#achievements", icon: Award },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand with Gradient */}
          <a href="#home" className="group flex items-center gap-2 transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-white font-bold text-xl">PL</span>
            </div>
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Pasindu Lakshan
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon size={18} />
                    {link.name}
                  </span>
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="group px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-4 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                }`}
              >
                <Icon size={20} />
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 block text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
