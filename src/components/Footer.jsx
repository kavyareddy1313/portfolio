import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer auto-container">
      <div className="footer-top-glow"></div>
      <div className="container">
        <div className="footer-content glass-panel">
          
          <div className="footer-brand">
            <h3 className="logo">Kavya<span className="gradient-text">sri</span></h3>
            <p>Passionate about building scalable applications and automating efficient deployment pipelines.</p>
          </div>
          
          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-socials">
            <h4>Let's Connect</h4>
            <div className="social-icons-simple">
              <a href="https://github.com/kavyareddy1313" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/kavyasri-gujjula-7762a8292/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a>
              <a href="mailto:kavyasrireddy28@gmail.com" aria-label="Mail"><Mail size={20}/></a>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Kavyasri Gujjula. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
