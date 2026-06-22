
import React from 'react';

const projectsData = [
  {
    title: "Breast Cancer Detection via Deep Learning",
    description:
      "Developed an advanced deep learning framework utilizing CNN and ResNet-50 architectures to detect breast cancer anomalies from mammogram images, focusing on image preprocessing and high-accuracy medical classification.",
    tags: ["Python", "HTML", "CSS", "Deep Learning", "CNN", "ResNet-50"],
    github: "#",
  },

  {
    title: "Hotel Reservation System",
    description:
      "Developed a web-based hotel reservation platform built to streamline room bookings and manage customer records seamlessly. Designed an interactive, responsive user interface using HTML, CSS, and JavaScript with active form validation.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "#",
  },

  {
    title: "Prediction Pneumonia Disease Using Deep Learning",
    description:
      "Developed a CNN-based chest X-ray classification system using TensorFlow and Keras, achieving 92% validation accuracy through image preprocessing and data augmentation for early pneumonia detection.",
    tags: ["Python", "HTML", "CSS", "Deep Learning", "CNN", "ResNet-50"],
    github: "#",
  },

  {
    title: "Skill Bridge-AI",
    description:
      "Developed an AI-based career guidance platform that analyzes user skills and interests to recommend suitable career paths, courses, and job opportunities.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-50 to-white py-24 border-y border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Featured Projects
          </h2>

          <p className="text-slate-500 mt-3 text-lg">
            A collection of academic and personal projects showcasing my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projectsData.map((project, index) => (
            <div
              key={index}
              className="
                relative
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-7
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-3
                hover:scale-[1.02]
                transition-all
                duration-500
                overflow-hidden
                group
              "
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="
                          bg-indigo-50
                          text-indigo-700
                          text-xs
                          font-semibold
                          px-3
                          py-1
                          rounded-full
                          hover:bg-indigo-100
                          transition
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.github}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-indigo-600
                      hover:text-indigo-800
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    View Code Details →
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;