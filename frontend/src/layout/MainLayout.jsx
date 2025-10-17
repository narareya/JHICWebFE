import React from 'react';
import NavBar from '../components/Navbar/NavBar.jsx';
import Footer from '../components/Footer/index.jsx';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;