import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Let's Connect</h2>
        <p className="text-slate-500 mt-2">Have an opportunity, a project idea, or just want to say hi?</p>
      </div>

      <form className="space-y-6 bg-white p-8 border border-slate-200 rounded-2xl shadow-xs" onSubmit={(e) => e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
            <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all" placeholder="john@example.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
          <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all resize-none" placeholder="Hi Harshitha, I'd love to chat about..."></textarea>
        </div>
        <button type="submit" className="w-full bg-slate-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-indigo-600 transition-all cursor-pointer shadow-md">
          Send Message
        </button>
      </form>
    </section>
  );
}