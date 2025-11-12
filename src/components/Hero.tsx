import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-100 via-purple-100 to-blue-100"
    >
      {/* Decorative Elements - Pastel Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-16 items-center">
            {/* Profile Photo - Left Side */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-fade-in">
              <div className="relative">
                {/* Decorative rings - Pastel Theme */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-200 to-purple-200 opacity-30 blur-2xl scale-110 animate-pulse" />
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-rose-300 to-purple-300 opacity-40 animate-spin-slow" style={{ animationDuration: '20s' }} />
                
                {/* Photo container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/IMG_4066.JPG"
                    alt="Kavya C K S"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative accent - Pastel Theme */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-300 to-purple-300 rounded-full opacity-80 blur-xl" />
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="order-1 lg:order-2 text-center lg:text-left animate-slide-in-right">
              <p className="text-rose-600 text-lg sm:text-xl font-medium mb-4">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
                Kavya C K S
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-800 mb-6">
                Student & AIML Engineer
              </p>
              <p className="text-base sm:text-lg text-neutral-700 mb-8 leading-relaxed">
                AI/ML enthusiast skilled in Python, ML algorithms, and developing real-time intelligent systems. 
                Building practical solutions that leverage machine learning and deep learning to solve real-world problems.
              </p>

              {/* CTA Buttons - Pastel Theme */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-rose-400 text-white font-semibold rounded-lg hover:bg-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  View My Projects
                </button>
                <button
                  onClick={() => scrollToSection('resume')}
                  className="px-8 py-4 bg-transparent border-2 border-rose-400 text-rose-500 font-semibold rounded-lg hover:bg-rose-400 hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  View Resume
                </button>
              </div>

              {/* Social Links - Pastel Theme */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="https://github.com/Kavya-1205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-neutral-700 hover:bg-rose-400 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kavya-c-k-s-bab748342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-neutral-700 hover:bg-rose-400 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:kavyasaravanan1255@gmail.com"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-neutral-700 hover:bg-rose-400 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Pastel Theme */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce inline-flex items-center justify-center p-2 text-neutral-700 hover:text-rose-500 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
