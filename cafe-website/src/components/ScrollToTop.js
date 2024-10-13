import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #f39c12;
  border: none;
  padding: 15px;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  &:hover {
    background-color: #d35400;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} visible={isVisible}>
      ↑
    </ScrollButton>
  );
};

export default ScrollToTop;
