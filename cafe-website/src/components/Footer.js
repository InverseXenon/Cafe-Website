import React from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
  margin-top: 15px;

  svg {
    margin: 0 10px;
    cursor: pointer;
    color: ;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #2e8b57;
    }
  }
`;

const Icon = styled.a`
  margin: 10px 100px;
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
      <p>&copy; 2024 CafeCookCode. All rights reserved.</p>
      <SocialLinks>
              <FaFacebook title="Share on Facebook" />
              <FaTwitter title="Share on Twitter" />
              <FaInstagram title="Share on Instagram" />
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
