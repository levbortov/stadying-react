import React from 'react';

import SiteHeader from '@modules/SiteHeader';
import ProductCatalog from '@modules/ProductCatalog';
const App: React.FC = () => {
  return (
    <>
      <SiteHeader />
      <ProductCatalog />
    </>
  );
};

export default App;
