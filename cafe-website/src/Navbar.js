import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;



const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


const NavItem = styled.li`
  color: white;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #f39c12;
  }
`;


function Navbar() {
    return (
      <Nav>
        <div>Cozy Cafe</div>
        <NavLinks>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/">Home</StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/menu">Menu</StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/about">About Us</StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/reservations">Reservations</StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/blog">Blog</StyledLink>
          </motion.div>

        </NavLinks>
      </Nav>
    );
  }

export default Navbar;
