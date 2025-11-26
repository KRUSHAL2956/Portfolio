import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SocialLinks from './SocialLinks';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Replace with your actual EmailJS keys
    const SERVICE_ID = 'krushal_portfolio';
    const TEMPLATE_ID = 'template_88qcf1a';
    const PUBLIC_KEY = 'T7oBdb6C9ZGbj-uXl';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: 'Krushal Hirpara',
          time: new Date().toLocaleString(),
          title: 'New Portfolio Inquiry',
        },
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#00f0ff] to-[#00ff88] bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          
          <div className="grid gap-6">
            <motion.a
              href="mailto:krushalhirpara.connect@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-[#00f0ff]/50 transition-all group cursor-pointer flex items-center gap-6"
            >
              <div className="w-12 h-12 bg-[#00f0ff]/10 rounded-full flex items-center justify-center group-hover:bg-[#00f0ff]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#00f0ff]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-400 text-sm">krushalhirpara.connect@gmail.com</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-[#00ff88]/50 transition-all group flex items-center gap-6"
            >
              <div className="w-12 h-12 bg-[#00ff88]/10 rounded-full flex items-center justify-center group-hover:bg-[#00ff88]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                <p className="text-gray-400 text-sm">+91 9662792179</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-[#ff0080]/50 transition-all group flex items-center gap-6"
            >
              <div className="w-12 h-12 bg-[#ff0080]/10 rounded-full flex items-center justify-center group-hover:bg-[#ff0080]/20 transition-colors">
                <MapPin className="w-6 h-6 text-[#ff0080]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                <p className="text-gray-400 text-sm">Surat, Gujarat</p>
              </div>
            </motion.div>
          </div>

          <div className="pt-8">
            <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
            <SocialLinks />
          </div>
        </div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/30 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#00f0ff] to-[#00ff88] text-black font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center"
              >
                Failed to send message. Please try again later.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
