import React from 'react';

type Props = {
  span?: number;
};
const ProductCard: React.FC<Props> = ({ span = 2 }) => {
  return (
    <article className={`col-span-${span} h-24 bg-purple-400 rounded-xl `}>
      placeholder
    </article>
  );
};

export default ProductCard;
