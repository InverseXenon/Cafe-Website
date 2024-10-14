import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/AboutUs';
import Reservations from './pages/Reservations';
import Navbar from './Navbar';
import Blog from './pages/Blog';
import GlobalStyle from './GlobalStyle';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <ScrollToTop />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
