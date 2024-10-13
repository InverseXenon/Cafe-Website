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
  font-size: 1.8rem;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Blog = () => {
    const blogPosts = [
      { id: 1, title: 'The Best Coffee Beans', content: 'Lorem ipsum...' },
      { id: 2, title: 'How to Brew the Perfect Cup', content: 'Lorem ipsum...' },
      { id: 3, title: 'The Art of Latte Art', content: 'Lorem ipsum...' },
      // Add more posts here
    ];
  
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;
  
    const handleSearch = (e) => setSearchTerm(e.target.value);
  
    const filteredPosts = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  

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
    <div>
      <h2>Blog</h2>
      <input
        type="text"
        placeholder="Search blog posts"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>

      <div>
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
}

export default Blog;
