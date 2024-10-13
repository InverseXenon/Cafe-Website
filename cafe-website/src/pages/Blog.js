import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 50px;
`;

const Post = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  font-size: 1.8rem;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #666;
`;

function Blog() {
  const posts = [
    {
      title: 'New Coffee Flavors for Autumn!',
      content: 'Come try our new pumpkin spice and cinnamon latte...',
    },
    {
      title: 'Live Music Event on Fridays!',
      content: 'Join us every Friday night for live music...',
    },
  ];

  return (
    <BlogContainer>
      <h1>Our Blog</h1>
      {posts.map((post, index) => (
        <Post key={index}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
        </Post>
      ))}
    </BlogContainer>
  );
}

export default Blog;
