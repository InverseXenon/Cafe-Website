import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const TeamName = styled.h4`
  font-size: 1.3rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        Welcome to our cafe, where we blend exceptional flavors with a cozy
        atmosphere. Our team is passionate about creating the best experience for our
        customers. Whether you're here for a quick coffee, a relaxing pastry, or a
        full meal, we have something for everyone. Founded in 2020, we've grown into
        a beloved spot for coffee lovers and foodies alike.
      </AboutText>

      <TeamContainer>
        <TeamMember>
          <TeamImage src="/images/team-member1.jpg" alt="Team Member 1" />
          <TeamName>John Doe</TeamName>
          <p>Head Chef</p>
        </TeamMember>
        <TeamMember>
          <TeamImage src="/images/team-member2.jpg" alt="Team Member 2" />
          <TeamName>Jane Smith</TeamName>
          <p>Barista</p>
        </TeamMember>
      </TeamContainer>
    </AboutContainer>
  );
};

export default About;
