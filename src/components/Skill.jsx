import React from "react";
import { Code } from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Vite",
  "Content Creator",
  "Video Editing",
  "Photoshop",
  "Word",
  "PowerPoint",
  "Excel",
];

const Skill = () => {
  return (
    <section id="skill" className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg animate-fade-in-up">
          <Code className="text-white" size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 animate-fade-in-up animation-delay-200">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6 animate-fade-in-up animation-delay-200"></div>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Here are the technologies and tools I work with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-600">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-2xl p-6 hover:scale-110 hover:shadow-2xl transform transition-all duration-300 border border-indigo-100 hover:border-indigo-300"
            >
              <p className="text-indigo-600 font-bold text-lg group-hover:text-purple-600 transition-colors">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
