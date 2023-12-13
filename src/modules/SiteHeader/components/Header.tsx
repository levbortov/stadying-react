import React from 'react';
import siteLogo from '/logo.png';
import Button from '@src/ui/Button';

const Header: React.FC = () => {
  return (
    <header className="py-3">
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
            placeholder
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
