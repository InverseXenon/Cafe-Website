import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';


const Nav = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 20px;
    border-top: 1px solid #f39c12;
  }

  &.active {
    display: flex;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #f39c12;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseIcon = styled(FaTimes)`
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      
      <Logo>Cafe Cook Code</Logo>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <NavLinks className={isOpen ? 'active' : ''}>
        <NavItem>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/" onClick={() => setIsOpen(false)}>Home</StyledLink>
          </motion.div>
        </NavItem>
        <NavItem>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/menu" onClick={() => setIsOpen(false)}>Menu</StyledLink>
          </motion.div>
        </NavItem>
        <NavItem>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/about" onClick={() => setIsOpen(false)}>About Us</StyledLink>
          </motion.div>
        </NavItem>
        <NavItem>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/reservations" onClick={() => setIsOpen(false)}>Reservations</StyledLink>
          </motion.div>
        </NavItem>
        <NavItem>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/blog" onClick={() => setIsOpen(false)}>Blog</StyledLink>
          </motion.div>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};
<script src="https://kit.fontawesome.com/a856812352.js" crossorigin="anonymous"></script>

export default Navbar;
