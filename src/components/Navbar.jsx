import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home', color: 'nav-purple' },
  { name: 'About', href: '#about', color: 'nav-blue' },
  { name: 'Skills', href: '#skills', color: 'nav-green' },
  { name: 'Projects', href: '#projects', color: 'nav-orange' },
  { name: 'Education', href: '#education', color: 'nav-pink' },
  { name: 'Contact', href: '#contact', color: 'nav-red' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo">
          Kavya<span className="gradient-text">sri</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`nav-link ${link.color}`}>
              {link.name}
            </a>
          ))}
          <a href="/kavyacv .PES1.pdf" target="_blank" rel="noreferrer" download="Kavyasri_Gujjula_Resume.pdf" className="resume-btn glass-panel">Resume</a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${link.color}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="/kavyacv .PES1.pdf" target="_blank" rel="noreferrer" download="Kavyasri_Gujjula_Resume.pdf" className="mobile-resume-btn glass-panel" onClick={() => setIsOpen(false)}>
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
