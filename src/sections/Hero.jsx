import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronRight } from 'lucide-react';
import Tilt from '../components/Tilt';
import './Hero.css';

// Importing the profile photo
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          
          <motion.div 
            className="photo-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="animated-ring"></div>
            <Tilt intensity={20}>
              <div className="hero-photo-container glass-panel">
                <img src={profilePhoto} alt="Kavyasri Gujjula" className="hero-photo" />
              </div>
            </Tilt>
          </motion.div>

          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="name-title">
              <span className="greeting">Hi, I'm</span><br/>
              Kavyasri Gujjula
            </h1>
            
            <h2 className="role-title">
              Aspiring <span className="gradient-text">Full Stack Developer</span> & <br/> 
              <span className="gradient-text">DevOps Engineer</span>
            </h2>
            
            <p className="hero-description">
              Passionate about building scalable applications and automating efficient deployment pipelines. Currently specializing in the MERN stack while mastering DevOps practices to bridge the technical gap between code and operations.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">View My Work</a>
              <a href="/resume.pdf" target="_blank" className="primary-btn">View CV</a>
              <a href="/kavyacv .PES1.pdf" download="Kavyasri_Gujjula_Resume.pdf" className="primary-btn">Download CV</a>
            </div>

            <div className="social-links">
              <a href="https://github.com/kavyareddy1313" target="_blank" rel="noreferrer" className="social-icon github-icon glass-panel" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kavyasri-gujjula-7762a8292/" target="_blank" rel="noreferrer" className="social-icon linkedin-icon glass-panel" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kavyasrireddy28@gmail.com" className="social-icon mail-icon glass-panel" aria-label="Mail">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
        <a href="#about" className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronRight size={24} style={{ transform: 'rotate(90deg)' }} />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
