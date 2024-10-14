import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// Review section container
const ReviewContainer = styled.div`
  padding: 60px 0;
  text-align: center;
  background: linear-gradient(135deg, #f0f4f7, #f8f8f8);
`;

// Review card style
const ReviewCard = styled.div`
  background: white;
  border: 2px solid #e0e0e0;  // More visible border
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);  // Adds lift effect on hover
    border-color: #d4af37;  // Change border color on hover
  }
`;

// Reviewer information style
const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

// Reviewer name style
const ReviewerName = styled.h4`
  font-size: 1.3rem;
  color: #333;
`;

// Review text style
const ReviewText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 15px 0;
`;

// Star rating style
const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  color: #f4b400;

  svg {
    margin: 0 2px;
  }
`;

// Social sharing icons style
const SocialShare = styled.div`
  margin-top: 15px;

  svg {
    margin: 0 10px;
    cursor: pointer;
    color: #555;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #d4af37;  // Match hover color with card border
    }
  }
`;

// Dishes section container
const DishesContainer = styled.div`
  padding: 60px 0;
  background: white;
`;

// Dishes section title
const DishesTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
`;

// Individual dish card style
const DishCard = styled.div`
  background: #f8f8f8;
  border: 2px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  margin: 10px;
  text-align: center;
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-8px);  // Adds lift effect
    border-color: #d4af37;  // Change border color on hover
  }
`;

// Dish name style
const DishName = styled.h4`
  font-size: 1.2rem;
  color: #333;
`;

// Dish price style
const DishPrice = styled.p`
  font-size: 1rem;
  color: #666;
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
    arrows: true,  // Add navigation arrows for more control
    dotsClass: 'slick-dots custom-dots',  // Custom dots style
  };

  const reviews = [
    { name: 'John Doe', text: 'The best cafe I have ever visited!', rating: 5 },
    { name: 'Jane Smith', text: 'Amazing coffee and fantastic ambiance.', rating: 4.5 },
    { name: 'Bob Brown', text: 'A perfect place to relax with friends.', rating: 4 },
    { name: 'Alice Johnson', text: 'Great service and delicious food!', rating: 5 },
    { name: 'Mike Lee', text: 'The atmosphere is wonderful, I love it!', rating: 4.8 },
  ];

  const dishes = [
    { name: 'Paneer Tikka', price: 'Rs 250' },
    { name: 'Chole Bhature', price: 'Rs 200' },
    { name: 'Masala Dosa', price: 'Rs 150' },
    { name: 'Biryani', price: 'Rs 300' },
    { name: 'Gulab Jamun', price: 'Rs 100' },
  ];

  return (
    <>
      <ReviewContainer>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '40px' }}>What Our Customers Say</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <ReviewerInfo>
                <ReviewerName>{review.name}</ReviewerName>
              </ReviewerInfo>
              <ReviewText>"{review.text}"</ReviewText>
              <Rating>
                {Array(Math.floor(review.rating))
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
                {review.rating % 1 !== 0 && <FaStarHalfAlt />}
              </Rating>
              <SocialShare>
                <FaFacebook title="Share on Facebook" />
                <FaTwitter title="Share on Twitter" />
                <FaInstagram title="Share on Instagram" />
              </SocialShare>
            </ReviewCard>
          ))}
        </Slider>
      </ReviewContainer>

      <DishesContainer>
        <h2 style={{ textAlign: 'center', margin: '40px 0' }}>Best Dishes of Our Cafe</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {dishes.map((dish, index) => (
            <DishCard key={index}>
              <DishName>{dish.name}</DishName>
              <DishPrice>{dish.price}</DishPrice>
            </DishCard>
          ))}
        </div>
      </DishesContainer>
    </>
  );
}

export default CustomerReview;
