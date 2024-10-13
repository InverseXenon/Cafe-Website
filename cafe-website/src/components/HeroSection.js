import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import heroImage from '../assets/bg2.jpg';

const Hero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const HeroText = styled.div`
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Hero>
        <HeroText>Welcome to Our CafeCookCode</HeroText>
      </Hero>
    </motion.div>
  );
}

export default HeroSection;
