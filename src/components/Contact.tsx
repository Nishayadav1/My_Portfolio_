import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [_, setSuccessMessage] = useState('');

  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'nisha7971n@gmail.com';

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) emailjs.init(EMAILJS_PUBLIC_KEY);
  }, [EMAILJS_PUBLIC_KEY]);

  const computeHash = (name: string, email: string, message: string) => {
    try {
      return btoa(unescape(encodeURIComponent(`${name}|${email}|${message}`)));
    } catch {
      return `${name}|${email}|${message}`;
    }
  };

  const getLastSent = () => {
    try {
      return localStorage.getItem('contact_last_sent') || '';
    } catch {
      return '';
    }
  };

  const saveLastSent = (hash: string) => {
    try {
      localStorage.setItem('contact_last_sent', hash);
    } catch {
      // ignore
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        setSuccessMessage('Email service is not configured.');
        return;
      }

      const currentHash = computeHash(formData.name, formData.email, formData.message);
      if (currentHash && currentHash === getLastSent()) {
        setSuccessMessage('You have already sent this exact message.');
        return;
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: EMAILJS_TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        message: formData.message,
      });

      saveLastSent(currentHash);
      setSuccessMessage('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send email:', err);
      setSuccessMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenMailClient = () => {
    const currentHash = computeHash(formData.name, formData.email, formData.message);
    if (currentHash && currentHash === getLastSent()) {
      setSuccessMessage('You already opened/sent this exact message.');
      return;
    }

    const subject = encodeURIComponent(`Contact from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${EMAILJS_TO_EMAIL}?subject=${subject}&body=${body}`;
    saveLastSent(currentHash);
    setSuccessMessage('Opened your email client to send the message.');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-gradient text-sm font-medium mb-4">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href={`mailto:${EMAILJS_TO_EMAIL}`} className="text-gray-800 font-semibold hover:text-gray-900 transition-colors">{EMAILJS_TO_EMAIL}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <a href="tel:+918130567971" className="text-gray-800 font-semibold hover:text-gray-900 transition-colors">+91-8130567971</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-gray-800 font-semibold">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-600 font-medium mb-4">Follow me on:</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/nisha-yadav-72b986249/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:scale-110 transition-all duration-200">
                  <svg className="text-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/Nishayadav1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:scale-110 transition-all duration-200">
                  <svg className="text-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100 transition-all text-gray-800"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-700 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs">Your Name</label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100 transition-all text-gray-800"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-700 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs">Your Email</label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100 transition-all text-gray-800 resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-700 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs">Your Message</label>
              </div>

              <button type="submit" disabled={loading} className="w-full gradient-bg py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed">
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>

              <div className="flex flex-col gap-3">
                <button type="button" onClick={handleOpenMailClient} className="w-full py-3 rounded-xl bg-white border border-gray-200 text-gray-800 font-medium hover:bg-gray-50 transition-all">Open in my Email App</button>

                {/* Success / error messages are intentionally hidden from the UI */}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
