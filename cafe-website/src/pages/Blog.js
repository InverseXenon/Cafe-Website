import React, { useState } from 'react';
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
  font-size: 2rem;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const PageButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #f39c12;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #d35400;
  }
`;

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'The Best Coffee Beans', content: 'Discover the best coffee beans to brew your perfect cup. From Arabica to Robusta, find out what suits your taste.' },
    { id: 2, title: 'How to Brew the Perfect Cup', content: 'Learn the secrets to brewing the perfect cup of coffee at home with our expert tips and tricks.' },
    { id: 3, title: 'The Art of Latte Art', content: 'Master the art of creating beautiful latte art with these simple techniques.' },
    { id: 4, title: 'New Coffee Flavors for Autumn!', content: 'Come try our new pumpkin spice and cinnamon latte! Perfect for those chilly autumn mornings.' },
    { id: 5, title: 'Live Music Event on Fridays!', content: 'Join us every Friday night for live music while you enjoy your favorite brew!' },
    { id: 6, title: 'Health Benefits of Drinking Coffee', content: 'Did you know that coffee has several health benefits? Discover how it can improve your health.' },
    { id: 7, title: 'The History of Coffee', content: 'Explore the rich history of coffee and how it became one of the world’s most beloved beverages.' },
    { id: 8, title: 'Top Coffee Brewing Methods', content: 'From French press to pour-over, learn about the top coffee brewing methods and how to use them.' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Change this to show more posts per page

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BlogContainer>
      <h2>Blog</h2>
      <SearchInput
        type="text"
        placeholder="Search blog posts"
        value={searchTerm}
        onChange={handleSearch}
      />
      {currentPosts.map((post) => (
        <Post key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
        </Post>
      ))}
      <PaginationContainer>
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
          <PageButton key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </PageButton>
        ))}
      </PaginationContainer>
    </BlogContainer>
  );
};

export default Blog;
