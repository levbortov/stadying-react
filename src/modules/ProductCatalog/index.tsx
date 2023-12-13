import React from 'react';
import ProductCard from './components/ProductCard';

const index: React.FC = () => {
  return (
    <section className="container mx-auto grid grid-cols-10 gap-3">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <ProductCard span={2} />
      <ProductCard span={3} />
      <ProductCard span={2} />
      <ProductCard span={3} />

      <ProductCard span={4} />
      <ProductCard span={2} />
      <ProductCard span={4} />

      <ProductCard span={3} />
      <ProductCard span={4} />
      <ProductCard span={3} />
    </section>
  );
};

export default index;
