import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ReviewCard from '../components/ReviewCard';
import reviews from '../reviewData';
import CustomerReview from '../components/CustomerReview';
import styled from 'styled-components';

const ReviewsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <HeroSection />
        <section>
        <h2>Customer Reviews</h2>
        <ReviewsGrid>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </ReviewsGrid>
        <CustomerReview />
      </section>
    </motion.div>
  );
}

export default Home;
