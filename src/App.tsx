import React from 'react';
import siteLogo from '/logo.png';
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex gap-4 items-center">
          <img src={siteLogo} alt="site logo" className="w-20 h-20" />
          <div>
            <h1 className="text-4xl font-bold uppercase">Лолопицца</h1>
            <p className="text-xl">Сеть пиццерий №2 в России</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg">Ещё не готово. Просмотрите другие ветки.</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
