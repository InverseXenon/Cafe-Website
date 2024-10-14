import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CustomerReview from '../components/CustomerReview';
import styled from 'styled-components';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
      <section>
        
        <CustomerReview />
      </section>
    </motion.div>
  );
}

export default Home;
