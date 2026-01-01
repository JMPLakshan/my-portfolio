import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Tech Company",
    duration: "2023 - Present",
    description: "Building modern web applications using React, Node.js, and MongoDB.",
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Startup Inc.",
    duration: "2022 - 2023",
    description: "Developed responsive UIs with React and Tailwind CSS.",
  },
  {
    type: "education",
    title: "Bachelor of Information Technology -Undergraduate",
    company: "SLIIT",
    duration: "2023 - 2025",
    description: "Studied software engineering, algorithms, and web development.",
  },
  {
    type: "education",
    title: "DIGITEC Diploma in ICT",
    company: "DIGITEC Computer System",
    duration: "2021 - 2022",
    description: "MS Office,Grapic Design and Web Design.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Briefcase className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bg-indigo-600 rounded-full p-3 shadow-lg z-10">
                  {exp.type === "work" ? (
                    <Briefcase className="text-white" size={20} />
                  ) : (
                    <GraduationCap className="text-white" size={20} />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="bg-gradient-to-br from-white to-indigo-50 p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-200">
                    <h3 className="text-xl font-bold text-indigo-700 mb-1">{exp.title}</h3>
                    <p className="text-sm text-gray-500 font-semibold mb-2">{exp.company}</p>
                    <p className="text-xs text-indigo-600 mb-3">{exp.duration}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
