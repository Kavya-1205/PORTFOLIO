import React from 'react';
import { Code2, Brain, Database, BarChart3, Wrench, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code2,
      category: 'Programming Languages',
      color: 'bg-blue-300',
      lightColor: 'bg-blue-100',
      borderColor: 'border-blue-200',
      skills: [
        { name: 'Python', level: 95, proficiency: 'Advanced' },
        { name: 'SQL', level: 90, proficiency: 'Advanced' },
        { name: 'Java', level: 70, proficiency: 'Intermediate' },
        { name: 'C', level: 70, proficiency: 'Intermediate' },
      ],
    },
    {
      icon: Brain,
      category: 'ML / DL Frameworks',
      color: 'bg-purple-300',
      lightColor: 'bg-purple-100',
      borderColor: 'border-purple-200',
      skills: [
        { name: 'Scikit-learn', level: 95, proficiency: 'Advanced' },
        { name: 'TensorFlow', level: 90, proficiency: 'Advanced' },
        { name: 'Keras', level: 90, proficiency: 'Advanced' },
        { name: 'PyTorch', level: 85, proficiency: 'Advanced' },
        { name: 'OpenCV', level: 85, proficiency: 'Advanced' },
        { name: 'NumPy & Pandas', level: 95, proficiency: 'Advanced' },
        { name: 'Matplotlib', level: 85, proficiency: 'Advanced' },
      ],
    },
    {
      icon: Brain,
      category: 'Machine Learning & AI',
      color: 'bg-indigo-300',
      lightColor: 'bg-indigo-100',
      borderColor: 'border-indigo-200',
      skills: [
        { name: 'ML Algorithms', level: 95, proficiency: 'Advanced' },
        { name: 'Deep Learning', level: 90, proficiency: 'Advanced' },
        { name: 'Recommendation Systems', level: 85, proficiency: 'Advanced' },
        { name: 'Data Preprocessing & Feature Engineering', level: 95, proficiency: 'Advanced' },
        { name: 'Model Evaluation & Tuning', level: 90, proficiency: 'Advanced' },
      ],
    },
    {
      icon: BarChart3,
      category: 'Data Analytics & Visualization',
      color: 'bg-teal-300',
      lightColor: 'bg-teal-100',
      borderColor: 'border-teal-200',
      skills: [
        { name: 'Power BI', level: 90, proficiency: 'Advanced' },
        { name: 'Exploratory Data Analysis (EDA)', level: 95, proficiency: 'Advanced' },
        { name: 'Data Cleaning', level: 95, proficiency: 'Advanced' },
        { name: 'Visualization Techniques', level: 90, proficiency: 'Advanced' },
      ],
    },
    {
      icon: Wrench,
      category: 'Tools & Technologies',
      color: 'bg-rose-300',
      lightColor: 'bg-rose-100',
      borderColor: 'border-rose-200',
      skills: [
        { name: 'Jupyter Notebook', level: 90, proficiency: 'Advanced' },
        { name: 'VS Code', level: 90, proficiency: 'Advanced' },
        { name: 'Git & GitHub', level: 85, proficiency: 'Advanced' },
        { name: 'Kaggle', level: 80, proficiency: 'Intermediate' },
        { name: 'Mapbox / HERE API', level: 70, proficiency: 'Intermediate' },
        { name: 'Google Maps API', level: 60, proficiency: 'Basic' },
        { name: 'Twilio', level: 70, proficiency: 'Intermediate' },
      ],
    },
    {
      icon: Database,
      category: 'Databases',
      color: 'bg-cyan-300',
      lightColor: 'bg-cyan-100',
      borderColor: 'border-cyan-200',
      skills: [
        { name: 'SQL', level: 90, proficiency: 'Advanced' },
        { name: 'MongoDB', level: 75, proficiency: 'Intermediate' },
        { name: 'Cassandra', level: 65, proficiency: 'Intermediate' },
      ],
    },
  ];

  const softSkills = [
    'Strong Communication',
    'Problem-Solving',
    'Teamwork & Collaboration',
    'Time Management',
    'Project Documentation',
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8" />
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels 
              across various technologies, frameworks, and tools in AI/ML development.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-neutral-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 ${category.borderColor}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${category.lightColor} p-3 rounded-lg border-2 ${category.borderColor}`}>
                    <category.icon size={28} className="text-neutral-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-semibold text-neutral-800">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                          skill.proficiency === 'Advanced' 
                            ? 'bg-teal-100 text-teal-700 border border-teal-200'
                            : skill.proficiency === 'Intermediate'
                            ? 'bg-rose-100 text-rose-700 border border-rose-200'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'slideIn 1s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills Section */}
          <div className="bg-gradient-to-br from-rose-100 via-purple-100 to-blue-100 rounded-2xl p-8 border-2 border-rose-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-lg border-2 border-rose-200">
                <Users size={28} className="text-neutral-700" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Soft Skills
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white px-4 py-3 rounded-lg text-center font-medium text-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border-2 border-rose-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              advancements in AI/ML. Currently exploring advanced deep learning architectures, 
              natural language processing, and computer vision techniques. Always eager to learn 
              new technologies and apply them to solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
