import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Ambulance Routing System',
      description: 'A real-time ambulance routing system that predicts ETA, identifies upcoming traffic signals, and sends notifications to ensure smoother emergency clearance. Built with machine learning algorithms for intelligent route optimization.',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80',
      tags: ['Python', 'Machine Learning', 'Google Maps API', 'Flask', 'Twilio'],
      github: 'https://github.com/Kavya-1205/Smart-Ambulance-Routing-System',
      demo: null,
      color: 'bg-rose-100',
      borderColor: 'border-rose-200',
    },
    {
      title: 'Fashion Item Classifier',
      description: 'A deep learning model that classifies fashion items like shirts, shoes, bags, etc., using image data from the Fashion MNIST dataset. Implemented using Convolutional Neural Networks for accurate image classification.',
      image: '/images/projects/fashion-item-classifier.jpg',
      tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'NumPy', 'Pandas'],
      github: 'https://github.com/Kavya-1205/Fashion-Item-Classifier',
      demo: null,
      color: 'bg-purple-100',
      borderColor: 'border-purple-200',
    },
    {
      title: 'Netflix Recommendation System',
      description: 'A recommendation system built using a Kaggle movie dataset, suggesting movies based on similarity between user preferences and content. Uses cosine similarity and collaborative filtering techniques.',
      image: '/images/projects/netflix-recommendation.jpg',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Cosine Similarity', 'Data Analysis'],
      github: 'https://github.com/Kavya-1205',
      demo: null,
      color: 'bg-blue-100',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8" />
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A selection of projects that showcase my skills in AI/ML, Python development, 
              and building intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-2 ${project.borderColor}`}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-neutral-900 rounded-full hover:bg-rose-400 hover:text-white transition-colors transform hover:scale-110"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-neutral-900 rounded-full hover:bg-rose-400 hover:text-white transition-colors transform hover:scale-110"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 ${project.color} text-neutral-700 text-sm font-medium rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
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

export default Projects;
