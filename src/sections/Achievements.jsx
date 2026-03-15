import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ExternalLink, X } from 'lucide-react';
import Tilt from '../components/Tilt';
import './Achievements.css';

// Importing badge images
import mongodbBadge from '../assets/achievements/mongodb-ai.jpg';
import oracleBadge from '../assets/achievements/oracle-ai.jpg';

const achievements = [
  {
    title: 'Building AI Agents with MongoDB',
    description: 'Validated expertise in architecting AI-driven agents integrated with MongoDB Vector Search and developer data platforms.',
    image: mongodbBadge,
    link: 'https://www.credly.com/go/jfA4BOI5',
    color: 'badge-mongodb'
  },
  {
    title: 'Oracle Cloud Infrastructure - AI Foundations',
    description: 'Certified in foundational AI concepts, machine learning workflows, and OCI AI services.',
    image: oracleBadge,
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A162B342DB679C6F5A134789E2390234', // Assuming same verification source pattern
    color: 'badge-oracle'
  }
];

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="achievements" className="achievements section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Achievements</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <Tilt key={index} intensity={12}>
              <motion.div 
                className={`achievement-card glass-panel ${item.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* ... card content */}
                <div className="badge-container" onClick={() => setSelectedImg(item.image)}>
                  <img src={item.image} alt={item.title} className="badge-img" />
                  <div className="badge-overlay">
                    <span className="zoom-text">Click to Zoom</span>
                  </div>
                </div>
                
                <div className="achievement-content">
                  <div className="achievement-header">
                    < Trophy className="trophy-icon" size={20} />
                    <h3 className="achievement-title">{item.title}</h3>
                  </div>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Modal for full screen view */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              className="badge-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.div 
                className="badge-modal-container"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="badge-modal-close" onClick={() => setSelectedImg(null)}>
                  <X size={24} />
                </button>
                <img src={selectedImg} alt="Achievement Badge" className="large-badge" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Achievements;
