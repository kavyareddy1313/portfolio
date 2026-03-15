import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am Kavyasri Gujjula, an aspiring Full Stack Developer and DevOps Engineer dedicated to building high-quality web applications. I work with the MERN stack and focus on integrating automated deployment pipelines to bridge the technical gap between code and operations. My goal is to deliver scalable, reliable software solutions that drive real-world impact through seamless continuous delivery.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-card glass-panel">
              <h3 className="stat-number gradient-text">B.Tech</h3>
              <p className="stat-label">Computer Science</p>
            </div>
            <div className="stat-card glass-panel">
              <h3 className="stat-number gradient-text">Full Stack</h3>
              <p className="stat-label">Development</p>
            </div>
            <div className="stat-card glass-panel">
              <h3 className="stat-number gradient-text">DevOps</h3>
              <p className="stat-label">Engineering</p>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
