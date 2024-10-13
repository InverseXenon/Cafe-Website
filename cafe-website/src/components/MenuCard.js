import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Card = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const ItemName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const ItemDesc = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ItemPrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

function MenuCard({ item }) {
  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ItemName>{item.name}</ItemName>
      <ItemDesc>{item.description}</ItemDesc>
      <ItemPrice>{item.price}</ItemPrice>
    </Card>
  );
}

export default MenuCard;
