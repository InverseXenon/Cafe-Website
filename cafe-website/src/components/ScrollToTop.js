import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa'; // Importing the arrow icon

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #f39c12;
  border: none;
  padding: 15px;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem; /* Slightly larger font size */
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Increased shadow for better depth */
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition for background color and scale */
  z-index: 1000; /* Ensures the button is above other content */

  &:hover {
    background-color: #d35400;
    transform: scale(1.1); /* Slightly enlarge the button on hover */
  }

  &:active {
    transform: scale(0.9); /* Slightly shrink the button on click */
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
      <FaArrowUp /> {/* Using the imported icon */}
    </ScrollButton>
  );
};

export default ScrollToTop;
