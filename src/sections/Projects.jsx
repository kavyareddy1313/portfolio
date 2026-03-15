import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, X } from 'lucide-react';
import Tilt from '../components/Tilt';
import './Projects.css';

import foodExpressImg from '../assets/projects/food-express.png';
import movieBookingImg from '../assets/projects/movie-booking.png';
import pythonProjectImg from '../assets/projects/python-project.png';

// Data from resume
const projects = [
  {
    title: 'Movie Booking Application',
    duration: 'Feb 2026',
    description: 'A sophisticated React-based cinema platform where users register to browse available films, filter by city and venue, and securely book seats for specific date and time slots.',
    tags: [
      { name: 'React.js', class: 'tag-react' },
      { name: 'JavaScript', class: 'tag-js' },
      { name: 'CSS', class: 'tag-css' },
      { name: 'Vercel', class: 'tag-devops' }
    ],
    image: movieBookingImg,
    liveLink: 'https://movie-booking-application-kappa.vercel.app/register',
    githubLink: 'https://github.com/kavyareddy1313/movie-booking-application'
  },
  {
    title: 'Food Express - MERN Stack Food Delivery',
    duration: 'Feb 2026',
    description: 'A dual-dashboard MERN application featuring specialized administrative controls for restaurant management and order tracking, alongside a streamlined user interface for menu browsing and cart management.',
    tags: [
      { name: 'React.js', class: 'tag-react' },
      { name: 'Node.js', class: 'tag-node' },
      { name: 'MongoDB', class: 'tag-mongodb' },
      { name: 'Express.js', class: 'tag-express' },
      { name: 'JWT', class: 'tag-auth' }
    ],
    image: foodExpressImg,
    liveLink: 'https://food-express-silk.vercel.app/',
    githubLink: 'https://github.com/kavyareddy1313/FoodExpress'
  },
  {
    title: 'GUI-based Product Search & Sort',
    duration: 'Jun 2025 - Jul 2025',
    description: 'A Python-based product management utility leveraging Tkinter and SQLite for multi-criteria search and sorting, CRUD operations, and automated CSV data exportation.',
    tags: [
      { name: 'Python', class: 'tag-python' },
      { name: 'Tkinter', class: 'tag-gui' },
      { name: 'SQLite', class: 'tag-db' },
      { name: 'Pandas', class: 'tag-data' }
    ],
    image: pythonProjectImg,
    liveLink: '#',
    githubLink: 'https://github.com/kavyareddy1313/PYTHON-new-project'
  }
];

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Tilt key={index} intensity={10}>
              <motion.div 
                className="project-card glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {project.image && (
                  <div className="project-image-wrapper" onClick={() => setSelectedImg(project.image)}>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="image-overlay">
                      <span className="zoom-text">Click to Zoom</span>
                    </div>
                  </div>
                )}
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-duration">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <p className="project-description text-secondary">
                    {project.description}
                  </p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`tag ${tag.class}`}>{tag.name}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-footer">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub Repository">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {project.liveLink !== '#' ? (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link primary-link" aria-label="Live Demo">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="project-link primary-link" style={{ opacity: 0.5, cursor: 'not-allowed' }} aria-label="Live Demo Unavailable">
                      <ExternalLink size={20} />
                      <span>N/A</span>
                    </span>
                  )}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
        
        {/* Full Screen Image Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              className="image-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.div 
                className="modal-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={() => setSelectedImg(null)}>
                  <X size={24} />
                </button>
                <img src={selectedImg} alt="Project Full Screen" className="modal-image" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
