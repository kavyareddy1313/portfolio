import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetEmail = 'kavyasrireddy28@gmail.com'; 
    const subject = encodeURIComponent(`Reaching out from ${formData.company}`);
    const body = encodeURIComponent(`Email: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-container">
          
          {/* Contact Form */}
          <motion.div 
            className="contact-form-wrapper glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact-subtitle">Send a Message</h3>
            <p className="contact-description">
              Looking for a developer? Fill out the form and it will securely redirect to your email client.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Your Email ID</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Tech Corp" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, we are interested in..." 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <span>Send via Email Client</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            className="contact-details"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="contact-subtitle">Contact Me</h3>
            <p className="contact-description">
              Feel free to reach out directly through any of the channels below.
            </p>

            <div className="contact-links">
              <a href="mailto:kavyasrireddy28@gmail.com" className="contact-item contact-mail glass-panel">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-info">
                  <h4>Email</h4>
                  <span>kavyasrireddy28@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918885604939" className="contact-item contact-phone glass-panel">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-info">
                  <h4>Phone</h4>
                  <span>+91 888 560 4939</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/kavyasri-gujjula-7762a8292/" target="_blank" rel="noreferrer" className="contact-item contact-linkedin glass-panel">
                <div className="contact-icon">
                  <Linkedin size={24} />
                </div>
                <div className="contact-info">
                  <h4>LinkedIn</h4>
                  <span>Connect with me</span>
                </div>
              </a>

              <a href="https://github.com/kavyareddy1313" target="_blank" rel="noreferrer" className="contact-item contact-github glass-panel">
                <div className="contact-icon">
                  <Github size={24} />
                </div>
                <div className="contact-info">
                  <h4>GitHub</h4>
                  <span>View my repositories</span>
                </div>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
