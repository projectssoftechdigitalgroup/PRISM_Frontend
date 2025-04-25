import React from 'react';
import Sidebar from '../components/Sidebar';
import ContentArea from '../components/ContentArea';
import PromptArea from '../components/PromptArea';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <div className="content-wrapper">
        <ContentArea />
        <PromptArea />
      </div>
    </div>
  );
};

export default HomePage;
