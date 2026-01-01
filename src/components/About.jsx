import React from "react";
import { GraduationCap, Code2, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-indigo-50 py-20 px-4 md:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am an <span className="font-semibold text-indigo-600">Undergraduate at SLIIT</span> (Sri Lanka Institute of Information Technology), 
                  specializing in <span className="font-semibold text-indigo-600">Information Technology</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Code2 className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Passion</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am a passionate developer creating modern web experiences using cutting-edge technologies 
                  like React and Tailwind CSS. I love turning ideas into reality through clean, efficient code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Rocket className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Goal</h3>
                <p className="text-gray-700 leading-relaxed">
                  My goal is to design responsive, accessible, and lightning-fast web interfaces for 
                  startups, businesses, and creative professionals who want to make an impact online.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats/Highlights */}
          <div className="space-y-4 animate-fade-in-up animation-delay-400">
            <div className="bg-white rounded-2xl shadow-xl p-7 transform hover:scale-105 transition-all duration-300 border border-indigo-100">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-xl font-bold text-gray-800">What I Do</h4>
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Frontend Development
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  UI/UX Design Implementation
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Content Creation
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Web Application Development
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-7 text-white border border-indigo-400">
              <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS", "HTML/CSS", "Node.js", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
