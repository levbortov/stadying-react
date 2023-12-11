import React from 'react';
import siteLogo from '/logo.png';
import Button from '@src/ui/Button';

const DynamicSection: React.FC = () => {
  return (
    <div className="py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={siteLogo} alt="site logo" className="w-12 h-12" />
          <div>
            <h1 className="text-2xl font-extrabold uppercase">Лолопицца</h1>
            <p className="text-sm font-medium">Сеть пиццерий №2 в России</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary-tonal" size="small">
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

const FixedSection: React.FC = () => {
  return (
    <div className="py-3 bg-white/50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex gap-3">
            <li>Завтраки</li>
            <li>Пицца</li>
            <li>Комбо</li>
            <li>Закуски</li>
            <li>Коктейли</li>
          </ul>
        </nav>
        <Button variant="primary">Корзина</Button>
      </div>
    </div>
  );
};

export const Lower: React.FC = () => {
  return (
    <div className="flex flex-col">
      <DynamicSection />
      <FixedSection />
    </div>
  );
};

export default Lower;
