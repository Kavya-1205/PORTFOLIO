import React from "react";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";

const Resume: React.FC = () => {
  // -------------------- Education --------------------
  const education = [
    {
      institution: "Rajalakshmi Institute of Technology, Chennai",
      degree: "B.E. in Computer Science (AI & ML)",
      period: "2023 – 2027",
      grade: "CGPA: 9.04",
    },
    {
      institution:
        "Velammal Matriculation & Higher Secondary School, Chennai",
      degree: "Higher Secondary Education",
      period: "2021 – 2023",
      grade: "92.3%",
    },
  ];

  // -------------------- Certifications --------------------
  const certifications = [
    {
      title: "Data Structures & Algorithms in Python",
      issuer: "Infosys Springboard",
      image: "/images/certificates/dsa-infosys.JPG",
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "Infosys Springboard",
      image: "/images/certificates/deep-learning-infosys.jpg",
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB University",
      image: "/images/certificates/mongodb.jpg",
    },
    {
      title: "Python Libraries for Data Science",
      issuer: "Simplilearn",
      image: "/images/certificates/python-simplilearn.JPG",
    },
    {
      title: "Tableau Data Visualization Basics",
      issuer: "Simplilearn",
      image: "/images/certificates/tableau-simplilearn.jpg",
    },
    {
      title: "AWS Academy Graduate – ML for NLP",
      issuer: "Amazon Web Services",
      image: "/images/certificates/aws-ml-nlp.JPG",
    },
  ];

  // -------------------- Highlights --------------------
  const highlights = [
    {
      title: "Technical Expertise",
      description:
        "Strong foundation in Python, Machine Learning, Data Analytics, and Deep Learning",
      icon: Briefcase,
    },
    {
      title: "Academic Excellence",
      description:
        "Maintaining 9.04 CGPA in Computer Science (AI & ML) specialization",
      icon: GraduationCap,
    },
    {
      title: "Certified Professional",
      description:
        "6+ industry certifications from Infosys, MongoDB, AWS, and Simplilearn",
      icon: Award,
    },
  ];

  // -------------------- Component JSX --------------------
  return (
    <section
      id="resume"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ---------- Header ---------- */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 mx-auto mb-8" />
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-8">
              Download my complete resume to learn more about my education,
              experience, and certifications.
            </p>
            <a
              href="/resume.pdf"
              download="Kavya_CKS_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-400 to-purple-400 text-white font-semibold rounded-lg hover:from-rose-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={24} />
              Download Resume (PDF)
            </a>
          </div>

          {/* ---------- Highlights ---------- */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const colors = [
                "from-rose-100 to-rose-200 border-rose-300",
                "from-purple-100 to-purple-200 border-purple-300",
                "from-blue-100 to-blue-200 border-blue-300",
              ];
              const iconColors = [
                "text-rose-500",
                "text-purple-500",
                "text-blue-500",
              ];

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors[index]} rounded-2xl p-8 border-2 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                      <Icon size={28} className={iconColors[index]} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ---------- Education ---------- */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <GraduationCap size={32} className="text-purple-500" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="inline-flex p-3 bg-white/80 backdrop-blur-sm rounded-lg mb-4">
                    <GraduationCap size={28} className="text-purple-500" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-2">
                    {edu.institution}
                  </h4>
                  <p className="text-lg text-neutral-700 mb-2">{edu.degree}</p>
                  <div className="flex items-center justify-between text-neutral-600">
                    <span className="font-medium">{edu.period}</span>
                    <span className="font-bold text-purple-600">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Certifications ---------- */}
          <div className="bg-gradient-to-br from-rose-100 via-purple-100 to-blue-100 rounded-2xl p-8 sm:p-12 border-2 border-purple-200 shadow-2xl mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <Award size={32} className="text-rose-500" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-purple-200 hover:border-rose-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-48 bg-gradient-to-br from-rose-50 to-purple-50 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const parent = e.currentTarget.parentElement;
                        e.currentTarget.style.display = "none";
                        if (parent) {
                          parent.innerHTML = `
                            <div class='flex items-center justify-center h-full'>
                              <div class='text-center'>
                                <p class='text-sm text-neutral-600'>Certificate Image</p>
                                <p class='text-xs text-neutral-500 mt-1'>${cert.title}</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-neutral-900 mb-2">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-rose-500" />
                      <p className="text-sm text-neutral-700">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Summary ---------- */}
          <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 sm:p-12 border-2 border-blue-200 shadow-lg">
            <h3 className="text-3xl font-bold text-neutral-900 mb-6">
              Professional Summary
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              3rd-year Computer Science student specializing in AI & Machine
              Learning with strong skills in Python, data analytics,
              visualization, and deep learning. Passionate about applying
              data-driven insights and building scalable applications.
              Experienced in developing real-time intelligent systems,
              implementing machine learning models, and creating
              production-ready solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
