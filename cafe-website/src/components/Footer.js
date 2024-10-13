import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const Icon = styled.a`
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #f39c12;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Cozy Cafe. All rights reserved.</p>
      <SocialLinks>
        <Icon href="https://www.instagram.com" target="_blank">Instagram</Icon>
        <Icon href="https://www.facebook.com" target="_blank">Facebook</Icon>
        <Icon href="https://www.twitter.com" target="_blank">Twitter</Icon>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
