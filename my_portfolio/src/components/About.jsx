import React from "react";

const educationTimeline = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Engineering in Computer Science and Technology",
    institution: "C Byregowda Institute Of Technology, Kolar",
    description:
      "Focusing on Core Computing, Software Engineering, and Data Structures. Maintaining a strong academic track record.",
  },
  {
    year: "2020 - 2022",
    title: "Pre University Education (Karnataka State Board)",
    institution: "Sahyadri Pu College, Kolar", // Fixed the missing comma!
    description:
      "Specialized in Physics, Chemistry, Mathematics, and Biology (PCMB).",
  },
  {
    year: "2020",
    title: "SSLC (Karnataka State Board)",
    institution: "Suvarna Central School, Kolar",
    description:
      "Completed secondary education with a strong foundation in Science and Mathematics.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12"
    >
      <div className="md:col-span-1">
        <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Computer Science Engineering student specializing in Python Full Stack Development and Machine Learning. Passionate about problem-solving, building practical web applications, and eager to drive impact in a dynamic development team.
        </p>
      </div>

      <div className="md:col-span-2 space-y-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4">
          Education Journey
        </h3>
        <div className="border-l-2 border-indigo-100 pl-6 space-y-8 relative">
          {educationTimeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
              <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                {item.year}
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">
                {item.title}
              </h4>
              <p className="text-sm font-medium text-slate-500">
                {item.institution}
              </p>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
