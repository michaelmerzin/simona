import React, { useEffect, useState } from 'react';
import './HeartAnimation.css';

const HeartAnimation = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        { id: Math.random(), left: Math.random() * 100 },
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heart-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{ left: `${heart.left}%` }}
        ></div>
      ))}
    </div>
  );
};

export default HeartAnimation;
