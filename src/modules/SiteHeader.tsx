import React from 'react';
import siteLogo from '/logo.svg';

const SiteHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="py-3">
        <div className="container mx-auto">
          <nav>
            <ul className="flex gap-3">
              <li>
                <a href="/">Вакансии</a>
              </li>
              <li>
                <a href="/">Контакты</a>
              </li>
              <li>
                <a href="/">О нас</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="container mx-auto flex justify-between align-middle">
          <div className="flex gap-3 align-middle">
            <img src={siteLogo} alt="site logo" className="w-12" />
            <div>
              <h1 className="text-2xl font-extrabold uppercase">Реакт пицца</h1>
              <p className="text-sm font-medium">Сеть пиццерий №2 в России</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button>Войти</button>
            <button>Регистрация</button>
          </div>
        </div>
        <div className="container mx-auto flex justify-between">
          <nav>
            <ul className="flex gap-3">
              <li>Завтраки</li>
              <li>Пицца</li>
              <li>Комбо</li>
              <li>Закуски</li>
              <li>Коктейли</li>
            </ul>
          </nav>
          <button>Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
