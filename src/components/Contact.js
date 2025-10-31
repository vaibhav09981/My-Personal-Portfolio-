import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-6 bg-black">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Get in touch
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        Let's connect. Send me an email through this button and I'll respond as soon as possible.
      </p>

      {/* Contact Button */}
      <a
        href="mailto:vaibhavjj99@gmail.com"
        className="bg-black border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-800 active:scale-95"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Contact;