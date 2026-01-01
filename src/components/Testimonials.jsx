import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sanjaya Peris",
    role: "CEO on DIGITEC Computer System",
    image: "https://ui-avatars.com/api/?name=John+Doe&background=4f46e5&color=fff&size=128",
    text: "Working with Pasindu was an absolute pleasure. His technical skills and attention to detail are outstanding!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=4f46e5&color=fff&size=128",
    text: "Excellent work! The website exceeded our expectations. Highly recommended for anyone looking for quality web development.",
    rating: 5,
  },
  {
    name: "Mike Wilson",
    role: "Startup Founder",
    image: "https://ui-avatars.com/api/?name=Mike+Wilson&background=4f46e5&color=fff&size=128",
    text: "Professional, creative, and delivered on time. The portfolio looks amazing and functions perfectly across all devices.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Star className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-7 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-indigo-100"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-3 shadow-md"
                />
                <h4 className="font-bold text-indigo-700">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
