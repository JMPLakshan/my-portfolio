import React from "react";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my skills, projects, and resume.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    link: "https://your-portfolio.com",
    github: "https://github.com/JMPLakshan/my-portfolio.git",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  
  {
    title: "Mobile App",
    description: "A React app that fetches weather data using a public API.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    link: "https://your-weather-app.com",
    github: "https://github.com/JMPLakshan/AuraMindApp1.git",
    tags: ["Android Studio", "Kotlin"],
  },
  {
    title: "Todo App",
    description: "A simple task manager with add, edit, and delete functionality.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    link: "https://your-todo-app.com",
    github: "https://github.com/yourusername/todo-app",
    tags: ["React", "LocalStorage", "JavaScript"],
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce website with payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    link: "https://your-ecommerce.com",
    github: "https://github.com/yourusername/ecommerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Blog Platform",
    description: "A modern blogging platform with rich text editor and comments.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
    link: "https://your-blog.com",
    github: "https://github.com/yourusername/blog",
    tags: ["React", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with multiple rooms and user authentication.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=300&fit=crop",
    link: "https://your-chat-app.com",
    github: "https://github.com/yourusername/chat-app",
    tags: ["React", "Socket.io", "Node.js", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg animate-fade-in-up">
          <FolderGit2 className="text-white" size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 animate-fade-in-up animation-delay-200">My Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6 animate-fade-in-up animation-delay-200"></div>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Below are some of the recent projects I've built using React and other technologies:
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-indigo-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
