import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';
import Tilt from '../components/Tilt';
import './Certificates.css';

// Importing images
import oracleCert from '../assets/certificates/oracle.jpg';
import nptelCert from '../assets/certificates/nptel.jpg';
import courseraCert from '../assets/certificates/coursera.jpg';
import saylorCert from '../assets/certificates/saylor.jpg';

// Data from resume
const certificates = [
  {
    title: 'Oracle Data Platform Certified Foundations Associate',
    issuer: 'Oracle',
    duration: 'Mar 2026',
    image: oracleCert,
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A162B342DB679C6F5A134789E2390234' // Placeholder link
  },
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    duration: 'Oct 2025',
    image: nptelCert,
    link: '#'
  },
  {
    title: 'Software Engineering: Implementation and Testing',
    issuer: 'Coursera (HKUST)',
    duration: 'May 2024',
    image: courseraCert,
    link: 'https://www.coursera.org/verify/MTGLXAL28CLX'
  },
  {
    title: 'C++ Programming (CS107)',
    issuer: 'Saylor Academy',
    duration: 'Jun 2025',
    image: saylorCert,
    link: 'https://certificates.saylor.org/6561564908KR'
  }
];

const Certificates = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="certificates" className="certificates section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <Tilt key={index} intensity={8}>
              <motion.div 
                className="certificate-card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImg(cert.image)}
                style={{ cursor: 'pointer' }}
              >
                {/* ... card content */}
                <div className="cert-image-preview">
                  <img src={cert.image} alt={cert.title} className="cert-img" />
                  <div className="cert-overlay">
                    <ExternalLink size={20} />
                    <span>View Details</span>
                  </div>
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer text-secondary">{cert.issuer}</p>
                  <div className="cert-duration">
                    <Calendar size={14} />
                    <span>{cert.duration}</span>
                  </div>
                </div>
                {cert.link !== '#' && (
                  <a 
                    href={cert.link} 
                    className="cert-link glass-panel" 
                    aria-label={`View ${cert.title} credential`}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Full Screen Image Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              className="cert-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.div 
                className="cert-modal-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="cert-modal-close" onClick={() => setSelectedImg(null)}>
                  <X size={24} />
                </button>
                <img src={selectedImg} alt="Certificate Full Screen" className="cert-modal-image" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
