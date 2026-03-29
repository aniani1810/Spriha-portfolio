import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-brand">
        <NavLink to="/"><span>Spriha</span> Singh</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} end>Home</NavLink>
        <NavLink to="/portfolio" className={({isActive}) => isActive ? "active" : ""}>Portfolio</NavLink>
        <NavLink to="/resume" className={({isActive}) => isActive ? "active" : ""}>Resume</NavLink>
        <NavLink to="/connect" className={({isActive}) => isActive ? "active" : ""}>Connect</NavLink>
      </div>
    </motion.nav>
  );
}
