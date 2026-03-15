import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Download } from 'lucide-react';
import './Education.css';

// Data from resume
const educationData = [
  {
    level: 'Bachelor of Technology - Computer Science and Engineering',
    institution: 'Lovely Professional University, Phagwara, Punjab',
    score: 'CGPA: 7.03',
    year: 'Aug 2023 - Present'
  },
  {
    level: 'Intermediate',
    institution: 'Alphores Junior College, Karimnagar, Telangana',
    score: 'Percentage: 96.5%',
    year: 'Jun 2021 - Apr 2023'
  },
  {
    level: 'Matriculation',
    institution: 'Indian Public School, Hanmakonda, Telangana',
    score: 'Percentage: 100%',
    year: 'Jun 2020 - Apr 2021'
  }
];

const Education = () => {
  return (
    <section id="education" className="education section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span> & Resume
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-layout">
          {/* Education Timeline */}
          <div className="timeline-container">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <div className="edu-header">
                    <h3 className="edu-level">{edu.level}</h3>
                    <span className="edu-year">{edu.year}</span>
                  </div>
                  <h4 className="edu-institution">
                    {index === 0 ? <GraduationCap size={18} /> : <BookOpen size={18} />}
                    {edu.institution}
                  </h4>
                  <p className="edu-score">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resume Download Section */}
          <motion.div 
            className="resume-section glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="resume-content">
              <h3>Hire Me for Your Next Project</h3>
              <p>
                Are you a recruiter looking for a passionate and dedicated Full Stack Developer & DevOps Engineer? 
                Download my complete resume to see my full qualifications, projects, and professional background.
              </p>
              
              <a href="/kavyacv .PES1.pdf" download="Kavyasri_Gujjula_Resume.pdf" className="download-btn">
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
            
            {/* Decorative elements */}
            <div className="resume-glow"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;
