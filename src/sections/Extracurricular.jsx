import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Trophy, Calendar } from 'lucide-react';
import Tilt from '../components/Tilt';
import './Extracurricular.css';

// Importing hackathon image
import hackathonCert from '../assets/extracurricular/hackathon-cert-cropped.jpg';

const Extracurricular = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const hackathonData = {
    title: 'Code-A-Haunt 24-hour Hackathon',
    duration: 'Feb 23, 2024 - Feb 24, 2024',
    organizer: 'CodingBlocks LPU',
    description: 'Developing a functional website within a 24-hour intensive sprint, demonstrating rapid prototyping, technical problem-solving, and team collaboration under pressure.',
    image: hackathonCert
  };

  return (
    <section id="extracurricular" className="extracurricular section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Extracurricular <span className="gradient-text">Achievement</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="hackathon-focus">
          <Tilt intensity={5}>
            <motion.div 
              className="activity-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedImg(hackathonData.image)}
              style={{ cursor: 'zoom-in' }}
            >
              <div className="activity-img-wrapper">
                <img src={hackathonData.image} alt={hackathonData.title} className="activity-img" />
                <div className="activity-overlay">
                  <span className="zoom-text">Click to View Certificate</span>
                </div>
              </div>
              
              <div className="activity-content">
                <div className="activity-header">
                  <div className="title-group">
                    <h3 className="activity-title">{hackathonData.title}</h3>
                    <p className="activity-organizer text-secondary">{hackathonData.organizer}</p>
                  </div>
                  <div className="duration-tag glass-panel">
                    <Calendar size={14} />
                    <span>{hackathonData.duration}</span>
                  </div>
                </div>
                
                <p className="activity-description">
                  {hackathonData.description}
                </p>

                <div className="achievement-badge glass-panel">
                  <Trophy size={18} className="text-accent" />
                  <span>Certificate of Participation</span>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>

        {/* Modal for full screen view */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              className="extra-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.div 
                className="extra-modal-container"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="extra-modal-close" onClick={() => setSelectedImg(null)}>
                  <X size={24} />
                </button>
                <div className="cropped-cert-container">
                  <img src={selectedImg} alt="Hackathon Certificate Full Screen" className="extra-modal-image" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
};

export default Extracurricular;
