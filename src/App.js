import React, { useState } from 'react';
import './App.css';
import ValentineQuestion from './ValentineQuestion';
import ThingsILike from './ThingsILike';
import HeartAnimation from './HeartAnimation';

const App = () => {
  const [isValentine, setIsValentine] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === 'yes') {
      setIsValentine(true);
    }
  };

  return (
    <div className="App">
      {isValentine && <HeartAnimation />}
      {!isValentine ? (
        <ValentineQuestion onAnswer={handleAnswer} />
      ) : (
        <ThingsILike />
      )}
    </div>
  );
};

export default App;
