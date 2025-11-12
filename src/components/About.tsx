import React from 'react';
import { Brain, Code2, Database, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Building intelligent systems using ML and DL algorithms to solve real-world problems.',
      color: 'bg-purple-200',
      textColor: 'text-purple-700',
    },
    {
      icon: Code2,
      title: 'Python Development',
      description: 'Proficient in Python with hands-on experience in TensorFlow, Keras, and Scikit-learn.',
      color: 'bg-blue-200',
      textColor: 'text-blue-700',
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Skilled in SQL, data preprocessing, and visualization using Power BI and Python libraries.',
      color: 'bg-teal-200',
      textColor: 'text-teal-700',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Systems',
      description: 'Developing real-time prediction systems and intelligent applications with practical impact.',
      color: 'bg-rose-200',
      textColor: 'text-rose-700',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
                  alt="AI and Machine Learning"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose-200 rounded-2xl -z-10 hidden sm:block" />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Passionate About AI & Machine Learning
              </h3>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  I'm a CSE (AIML) student skilled in Python, machine learning, and data analysis. 
                  I've built multiple projects focused on real-time prediction and intelligent systems, 
                  applying algorithms in ML and DL to solve practical problems.
                </p>
                <p>
                  Along with strong communication skills, I'm also familiar with SQL, Power BI, and 
                  data visualization techniques. My projects range from real-time ambulance routing 
                  systems to deep learning classifiers and recommendation engines.
                </p>
                <p>
                  I enjoy learning new tools and using AI to create meaningful, real-world solutions. 
                  Whether it's building predictive models or developing intelligent systems, I'm driven 
                  by the challenge of turning complex problems into practical applications.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-neutral-50 hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-neutral-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.color} rounded-full mb-4`}>
                  <item.icon size={32} className={item.textColor} />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
