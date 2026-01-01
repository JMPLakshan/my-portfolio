import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaHeart } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pasindu Lakshan</h3>
            <p className="text-indigo-200 mb-4">
              Web Developer & Content Creator passionate about building amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100031016753474" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://youtube.com/@theluckytec?si=J3VOOdfWzcziqiEH" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.instagram.com/_j.m_lucky__boy_/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com/JMPLakshan" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/J_m_Lucky_Boy" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-indigo-200 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#about" className="text-indigo-200 hover:text-white transition">About</a>
              </li>
              <li>
                <a href="#skill" className="text-indigo-200 hover:text-white transition">Skills</a>
              </li>
              <li>
                <a href="#achievements" className="text-indigo-200 hover:text-white transition">Achievements</a>
              </li>
              <li>
                <a href="#experience" className="text-indigo-200 hover:text-white transition">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-indigo-200 hover:text-white transition">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-indigo-200 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span className="text-indigo-200">pasindul586@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span className="text-indigo-200">076 6440370</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-indigo-200">Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-600 pt-8 text-center">
          <p className="text-indigo-200 flex items-center justify-center gap-2">
            © {currentYear} Pasindu Lakshan. Made with <FaHeart className="text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
