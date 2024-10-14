import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container for the About section
const AboutContainer = styled(motion.div)`
  padding: 100px 50px;
  background-color: #f4f4f4;
  text-align: center;
  min-height: 100vh; // Ensures it takes the full height of the screen
`;

// Title of the About section
const AboutTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

// Description text of the About section
const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

// Container for the team section
const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
  flex-wrap: wrap; // Ensures the team members wrap on smaller screens
`;

// Each team member block styled as a card
const TeamMember = styled(motion.div)`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow effect
  border: 2px solid #e0e0e0; // Border around the card
  max-width: 250px;
  transition: transform 0.3s, box-shadow 0.3s;

  // Hover effects for card-like feel
  &:hover {
    transform: translateY(-10px); // Slight lift effect on hover
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); // Stronger shadow effect on hover
    border-color: #333; // Border color change on hover
  }
`;

// Name of the team member
const TeamName = styled.h4`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

// Role of the team member
const TeamRole = styled.p`
  font-size: 1.1rem;
  color: #777;
`;

const About = () => {
  // Framer motion animation settings
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  return (
    <AboutContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AboutTitle
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </AboutTitle>
      
      <AboutText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Welcome to our cafe, where we blend exceptional flavors with a cozy
        atmosphere. Our team is passionate about creating the best experience for our
        customers. Whether you're here for a quick coffee, a relaxing pastry, or a
        full meal, we have something for everyone. Founded in 2020, we've grown into
        a beloved spot for coffee lovers and foodies alike.
      </AboutText>

      <TeamContainer>
      <TeamMember
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TeamName>Piyush Patil</TeamName>
          <TeamRole>Head Chef</TeamRole>
        </TeamMember>
        <TeamMember
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TeamName>Anjali Pillai</TeamName>
          <TeamRole>Chef</TeamRole>
        </TeamMember>
        <TeamMember
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TeamName>Tanisha Pradhan</TeamName>
          <TeamRole>Cashier</TeamRole>
        </TeamMember>

        <TeamMember
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TeamName>Shreyash Pawar</TeamName>
          <TeamRole>Barista</TeamRole>
        </TeamMember>
      </TeamContainer>
    </AboutContainer>
  );
};

export default About;
