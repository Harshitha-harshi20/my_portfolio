import React from 'react';

const certificates = [
  {
    title: "Hands-On GPT-3.5 &GPT-4 for Data Analysis & Machine Learning",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: "#"
  },
  {
    title: "Hands on with Google Cloud Platform ",
    issuer: "IntelliCert technologies",
    date: "2025",
    credentialUrl: "#"
  },
  {
    title: "Machine learning Trainee ",
    issuer: "Inventereon technologies",
    date: "2026",
    credentialUrl: "#"
  }
];

export default function Certificates() {
  return (
    <section className="bg-slate-50 py-20 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900">Certifications & Badges</h2>
          <p className="text-slate-500 mt-2">Verified credentials and extracurricular accomplishments.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white p-6 border border-slate-200 rounded-2xl flex items-start gap-4 shadow-xs">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 font-bold text-xl">
                📜
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{cert.title}</h3>
                <p className="text-sm text-slate-500">{cert.issuer} • {cert.date}</p>
                <a href={cert.credentialUrl} className="inline-block mt-3 text-xs font-semibold text-indigo-600 hover:underline">
                  View Credential ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}