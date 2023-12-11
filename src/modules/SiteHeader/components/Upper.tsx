import React from 'react';

const Upper: React.FC = () => {
  return (
    <div className="py-3 border-b">
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
  );
};

export default Upper;
