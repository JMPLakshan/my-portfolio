import React from "react";
import { Award, Trophy, BookOpen, Medal, Star, CheckCircle2 } from "lucide-react";

const achievements = {
  academic: {
    title: "A'Level Results",
    icon: BookOpen,
    color: "from-indigo-500 to-purple-500",
    items: [
      { subject: "SFT", grade: "C", description: "Science For Technology" },
      { subject: "ICT", grade: "C", description: "Information Technology" },
      { subject: "BST", grade: "C", description: "Bio System Technology" },
      { subject: "Common General Test", grade: "34", description: "Common General Test Paper" },
      
      // Add more subjects as needed
    ],
  },
  
  sports: {
    title: "Sports Achievements",
    icon: Trophy,
    color: "from-purple-500 to-pink-500",
    items: [
      { title: "School VolleyBall", year: "2014-2020", description: "SportMeet 1,2 and 3 Places" },
      { title: "School Athletics-Throwing a ball", year: "2016-2017", description: "SportMeet 1 and 2 Places" },
      { title: "Chess Tournament", year: "2016", description: "Ceylon Lions Individual Chess Championship" },
      
      // Add your actual sports achievements
    ],
  },
  courses: {
    title: "Online Certifications",
    icon: Award,
    color: "from-pink-500 to-red-500",
    items: [
      { name: "Full Stack Development", platform: "Online", year: "2023", description: "MERN stack specialization" },
      { name: "Foundation in Information Technology", platform: "Esoft", year: "2022", description: "Foundation in ICT..." },
      { name: "Arduino", platform: "CodeCamp", year: "2021", description: "Basic Ardunio " },
      { name: "English", platform: "Sun Vision", year: "2023", description: "Spoken English" },
      
      // Add your actual courses
    ],
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative bg-gradient-to-b from-indigo-50 to-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-xl">
            <Medal className="text-white" size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            Achievements & Milestones
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my academic excellence, sports accomplishments, and continuous learning journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="space-y-12">
          {/* Academic Results */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${achievements.academic.color} rounded-lg flex items-center justify-center shadow-md`}>
                <achievements.academic.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{achievements.academic.title}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.academic.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-7 transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-indigo-500 hover:border-purple-500"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">{item.subject}</h4>
                    <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full text-white font-bold text-lg shadow-md">
                      {item.grade}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sports Achievements */}
          <div className="animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${achievements.sports.color} rounded-lg flex items-center justify-center shadow-md`}>
                <achievements.sports.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{achievements.sports.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.sports.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl p-7 transition-all duration-300 transform hover:-translate-y-3 border border-purple-200"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Trophy className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Online Courses */}
          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${achievements.courses.color} rounded-lg flex items-center justify-center shadow-md`}>
                <achievements.courses.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{achievements.courses.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.courses.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-pink-500 hover:border-purple-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1">{item.name}</h4>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                          {item.platform}
                        </span>
                        <span className="text-xs text-gray-500">{item.year}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-800">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Star className="mx-auto mb-2 text-yellow-500" size={32} />
            <div className="text-3xl font-bold text-indigo-600 mb-1">4+</div>
            <div className="text-sm text-gray-600">A Grades</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Trophy className="mx-auto mb-2 text-purple-500" size={32} />
            <div className="text-3xl font-bold text-purple-600 mb-1">3+</div>
            <div className="text-sm text-gray-600">Sports Awards</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Award className="mx-auto mb-2 text-pink-500" size={32} />
            <div className="text-3xl font-bold text-pink-600 mb-1">4+</div>
            <div className="text-sm text-gray-600">Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <BookOpen className="mx-auto mb-2 text-indigo-500" size={32} />
            <div className="text-3xl font-bold text-indigo-600 mb-1">100+</div>
            <div className="text-sm text-gray-600">Learning Hours</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
