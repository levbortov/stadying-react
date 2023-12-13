import React from 'react';

import TopNavigation from './components/TopNavigation';
import Header from './components/Header';
import FixedNavigation from './components/FixedNavigation';

const index: React.FC = () => {
  return (
    <div className="flex flex-col">
      <TopNavigation />
      <Header />
      <FixedNavigation />
    </div>
  );
};

export default index;
