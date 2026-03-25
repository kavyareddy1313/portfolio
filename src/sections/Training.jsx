import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ExternalLink, X } from 'lucide-react';
import './Training.css';
import certificateImage from '../assets/certificates/python.jpg';

const Training = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="training" className="training section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Training</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="training-container">
          <motion.div 
            className="training-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="training-image-wrapper" 
              onClick={() => setIsModalOpen(true)}
              style={{ cursor: 'pointer' }}
            >
              <img src={certificateImage} alt="Python Dynamics Certificate" className="training-cert-img" />
              <div className="training-overlay">
                <button className="training-view-btn" onClick={() => setIsModalOpen(true)}>
                  <ExternalLink size={20} /> View Certificate
                </button>
              </div>
            </div>
            
            <div className="training-content">
              <h3 className="training-title gradient-text">Python Dynamics: From Algorithms to AI</h3>
              
              <div className="training-meta">
                <div className="meta-item">
                  <BookOpen size={18} className="text-accent" />
                  <span>Lovely Professional University</span>
                </div>
                <div className="meta-item">
                  <Calendar size={18} className="text-accent" />
                  <span>Completed: July 2025</span>
                </div>
              </div>
              
              <p className="training-description">
                A comprehensive skill development course organized by the Centre for Professional Enhancement. 
                This training covered advanced Python concepts, algorithmic problem-solving techniques, and 
                foundational artificial intelligence mechanisms, establishing a strong base for scalable software 
                development and automation practices.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Full Screen Image Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              className="cert-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div 
                className="cert-modal-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="cert-modal-close" onClick={() => setIsModalOpen(false)}>
                  <X size={24} />
                </button>
                <img src={certificateImage} alt="Certificate Full Screen" className="cert-modal-image" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Training;
