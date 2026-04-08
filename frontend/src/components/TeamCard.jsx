import { useState } from 'react';
import { motion } from 'framer-motion';

export const TeamCard = ({ member, index }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="team-card-wrapper"
      data-testid={`team-card-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div
        className={`team-card ${isActive ? 'active' : ''}`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onClick={handleToggle}
        tabIndex={0}
        role="button"
        aria-expanded={isActive}
      >
        {/* Background Image */}
        <div 
          className="team-card-bg"
          style={{ backgroundImage: `url(${member.image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="team-card-overlay" />
        
        {/* Hover Overlay with custom gradient */}
        <div className="team-card-hover-overlay" />
        
        {/* Content */}
        <div className="team-card-content">
          {/* Description (visible on hover) */}
          <div className="team-card-description">
            <p>{member.description}</p>
          </div>
          
          {/* Badge */}
          <div className="team-card-badge">
            {member.badge || (member.isFounder ? 'Fondateur' : 'Co-fondateur')}
          </div>
          
          {/* Name & Role */}
          <h3 className="team-card-name">{member.name}</h3>
          <p className="team-card-role">{member.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
