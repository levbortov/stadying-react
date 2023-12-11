import React from 'react';

import Upper from './components/Upper';
import Lower from './components/Lower';

const index: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Upper />
      <Lower />
    </div>
  );
};

export default index;
