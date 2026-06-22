import React from 'react';

const skills = [
  "Python", "SQL" ,"HTML5 & CSS3", "JavaScript", "ReactJS", 
  "Tailwind CSS", "Git & GitHub", "Node.js", 
  "Python", "SQL"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">My Toolbox</h2>
        <p className="text-slate-500 mb-10">The technologies and tools I work with daily.</p>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white border border-slate-200 text-slate-800 font-medium px-5 py-3 rounded-xl shadow-xs hover:border-indigo-400 hover:text-indigo-600 transition-all">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}