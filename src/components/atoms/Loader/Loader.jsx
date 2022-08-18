import React from 'react';
import { motion } from 'framer-motion';
import { StyledLoaderDiv, StyledLoader } from './Loader.style.jsx';
import StyledContainer from '../../../assets/styles/StyledContainer';

const Loader = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  };
  const circleTransition = {
    yoyo: Infinity,
    duration: 0.5,
    ease: 'easeInOut',
  };

  return (
    <StyledContainer>
      <StyledLoaderDiv>
        <StyledLoader>
          <motion.div
            className='loader-container'
            variants={containerVariants}
            initial='start'
            animate='end'
          >
            <motion.span
              variants={circleVariants}
              transition={circleTransition}
            ></motion.span>
            <motion.span
              variants={circleVariants}
              transition={circleTransition}
            ></motion.span>
            <motion.span
              variants={circleVariants}
              transition={circleTransition}
            ></motion.span>
          </motion.div>
        </StyledLoader>
      </StyledLoaderDiv>
    </StyledContainer>
  );
};

export default Loader;
