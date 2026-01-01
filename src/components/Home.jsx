import React from "react";
import Me from "../assets/me.jpg";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Code2, Download, ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image with Decorative Ring */}
        <div className="relative mb-8 animate-fade-in-up">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-md opacity-75 animate-pulse"></div>
          <img
            src={Me}
            alt="Pasindu Lakshan"
            className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white"
          />
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg">
            
          </div>
        </div>

        {/* Welcome Badge */}
        <div className="mb-4 animate-fade-in-up animation-delay-200">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Welcome 
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 animate-fade-in-up animation-delay-400">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Pasindu Lakshan
          </span>
        </h1>

        {/* Subtitle with Typing Effect */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 animate-fade-in-up animation-delay-600">
          Web Developer & Content Creator
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl text-center leading-relaxed animate-fade-in-up animation-delay-800">
          Passionate about crafting beautiful, functional, and user-friendly web experiences.
          Specializing in <span className="font-semibold text-indigo-600">React</span>, 
          <span className="font-semibold text-indigo-600"> Tailwind CSS</span>, and modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-1000">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            View My Work
            <ArrowDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 border-indigo-600"
          >
            <Download className="inline-block mr-2" size={20} />
            Download CV
          </a>
        </div>
        


        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 animate-fade-in-up animation-delay-1200">
         
         
          <span className="text-gray-500 font-medium hidden md:inline">Connect with me:</span>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a
              href="https://github.com/JMPLakshan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaGithub className="text-gray-700 group-hover:text-indigo-600 transition-colors" size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100031016753474"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaFacebook className="text-gray-700 group-hover:text-blue-600 transition-colors" size={24} />
            </a>
            <a
              href="https://youtube.com/@theluckytec?si=J3VOOdfWzcziqiEH"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaYoutube className="text-gray-700 group-hover:text-red-600 transition-colors" size={24} />
            </a>
            <a
              href="https://www.instagram.com/_j.m_lucky__boy_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaInstagram className="text-gray-700 group-hover:text-pink-600 transition-colors" size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaLinkedin className="text-gray-700 group-hover:text-blue-700 transition-colors" size={24} />
            </a>
            <a
              href="https://twitter.com/J_m_Lucky_Boy"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaTwitter className="text-gray-700 group-hover:text-sky-500 transition-colors" size={24} />
            </a>
          </div>
        </div>
      </div>



      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <div className="flex flex-col items-center">
          <ArrowDown className="text-indigo-600 group-hover:text-purple-600 transition-colors" size={32} />
          <span className="text-xs text-gray-500 mt-1">Scroll Down</span>
        </div>
      </a>
    </section>
  );
};

export default Home;
