import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
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

const ReviewText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ReviewerName = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const Rating = styled.div`
  margin-top: 5px;
  font-weight: bold;
  color: #f39c12;
`;

function ReviewCard({ review }) {
  return (
    <Card>
      <ReviewText>"{review.review}"</ReviewText>
      <ReviewerName>- {review.name}</ReviewerName>
      <Rating>Rating: {review.rating} / 5</Rating>
    </Card>
  );
}

export default ReviewCard;
