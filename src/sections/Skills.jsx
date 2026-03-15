import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Terminal, Wrench } from 'lucide-react';
import './Skills.css';

import { 
  SiHtml5, SiJavascript, SiPython, SiCplusplus, SiReact, 
  SiNodedotjs, SiExpress, SiMongodb, SiDocker, 
  SiPostman, SiLinux, SiGithub 
} from 'react-icons/si';
import { FaJava, FaGitAlt, FaAws, FaCss3Alt } from 'react-icons/fa';
import { VscVscode, VscAzure } from 'react-icons/vsc';
import { SiApachemaven } from 'react-icons/si';

// Data from resume
const technicalSkills = [
  { name: 'Languages', icon: <Code2 size={24} />, items: [
      { name: 'HTML', icon: <SiHtml5 size={18} color="#E34F26" /> },
      { name: 'CSS', icon: <FaCss3Alt size={18} color="#1572B6" /> },
      { name: 'JavaScript', icon: <SiJavascript size={18} color="#F7DF1E" /> },
      { name: 'Python', icon: <SiPython size={18} color="#3776AB" /> },
      { name: 'Java', icon: <FaJava size={18} color="#007396" /> },
      { name: 'C++', icon: <SiCplusplus size={18} color="#00599C" /> },
      { name: 'Linux', icon: <SiLinux size={18} color="#FCC624" /> }
  ]},
  { name: 'Frameworks', icon: <Layout size={24} />, items: [
      { name: 'React JS', icon: <SiReact size={18} color="#61DAFB" /> },
      { name: 'Node JS', icon: <SiNodedotjs size={18} color="#339933" /> },
      { name: 'Express JS', icon: <SiExpress size={18} color="#ffffff" /> }
  ]},
  { name: 'Tools/Platforms', icon: <Wrench size={24} />, items: [
      { name: 'VS Code', icon: <VscVscode size={18} color="#007ACC" /> },
      { name: 'Git', icon: <FaGitAlt size={18} color="#F05032" /> },
      { name: 'GitHub', icon: <SiGithub size={18} color="#ffffff" /> },
      { name: 'AWS', icon: <FaAws size={18} color="#232F3E" /> },
      { name: 'Docker', icon: <SiDocker size={18} color="#2496ED" /> },
      { name: 'MongoDB', icon: <SiMongodb size={18} color="#47A248" /> },
      { name: 'Postman', icon: <SiPostman size={18} color="#FF6C37" /> },
      { name: 'Maven', icon: <SiApachemaven size={18} color="#C71A22" /> },
      { name: 'Azure', icon: <VscAzure size={18} color="#0089D6" /> }
  ]},
];

const nonTechnicalSkills = [
  { name: 'Team-Oriented', color: 'soft-purple' },
  { name: 'Highly Committed', color: 'soft-blue' },
  { name: 'Adaptability', color: 'soft-pink' },
  { name: 'Leadership', color: 'soft-green' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-container">
          
          <div className="skills-group">
            <h3 className="skills-subtitle">Technical Skills</h3>
            <div className="tech-skills-grid">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-card glass-panel"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skill-icon text-accent">
                    {skill.icon}
                  </div>
                  <h4 className="skill-category">{skill.name}</h4>
                  <ul className="skill-items">
                    {skill.items.map((item, i) => (
                      <li key={i} className="skill-item-inner">
                        {item.icon}
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-subtitle">Non-Technical Skills</h3>
            <div className="non-tech-skills">
              {nonTechnicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className={`non-tech-skill ${skill.color} glass-panel`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skill-dot"></div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
