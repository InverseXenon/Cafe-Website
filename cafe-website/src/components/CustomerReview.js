import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  padding: 50px 0;
  text-align: center;
  background-color: #f8f8f8;
`;

const ReviewCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const ReviewerName = styled.h4`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 20px 0;
`;

function CustomerReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const reviews = [
    { name: 'John Doe', text: 'The best cafe I have ever visited!' },
    { name: 'Jane Smith', text: 'Amazing coffee and fantastic ambiance.' },
    { name: 'Bob Brown', text: 'A perfect place to relax with friends.' },
  ];

  return (
    <ReviewContainer>
      <h2>What Our Customers Say</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewText>{review.text}</ReviewText>
            <ReviewerName>- {review.name}</ReviewerName>
          </ReviewCard>
        ))}
      </Slider>
    </ReviewContainer>
  );
}

export default CustomerReview;
