// src/components/AnimatedPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { motionStyle } from './animation';

const AnimatedPage = ({ children, key }) => {
  return (
    <motion.div key={key} initial={motionStyle.initial} animate={motionStyle.animate} exit={motionStyle.exit} transition={motionStyle.transition}>
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
