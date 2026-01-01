import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_lne7ohy',
      'template_je9je59',
      form.current,
      '3rn2rU2ekZplckdC6'
    )
    .then(() => {
        alert('✅ Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.error('❌ EmailJS error:', error.text);
        alert('❌ Failed to send message. Please try again later.');
      })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-white overflow-hidden" id="contact">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Mail className="text-white" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's discuss your project or just say hello!
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white p-10 rounded-2xl shadow-2xl border border-indigo-100 animate-fade-in-up animation-delay-200">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300"
              placeholder="you@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none h-40 transition-all duration-300"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`group w-full py-4 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
              isSending ? 'bg-indigo-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl'
            }`}
          >
            {isSending ? 'Sending...' : (
              <>
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
