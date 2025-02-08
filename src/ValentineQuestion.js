import React, { useEffect, useState, useMemo } from "react";
import './ValentineQuestion.css'; // Add a CSS file to style this component

const ValentineQuestion = ({ onAnswer }) => {

  const yourImageArray = useMemo(() => [
    require('./images/IMG_2672.jpg'),
    require('./images/IMG_2673.jpg'),
    require('./images/IMG_2684.jpg')
    // Add more image paths as needed
  ], []);
  
  const images = useMemo(() => [...yourImageArray], [yourImageArray]);
  

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images]);

  return (
    <div className="valentine-question">
      <div className="image-container">
        <img src={currentImage} alt="Cute Heart" className="cute-heart" />
        <img src={require('./images/heart2.png')} alt="Heart" className="heart-icon" />
        <img src={currentImage} alt="Cute Heart" className="cute-heart" />

      </div>
      <h1>Simona, will you be my Valentine?</h1>
      <button onClick={() => onAnswer('yes')}>Yes</button>
      <button onClick={() => onAnswer('no')}>No</button>
    </div>
  );
};

export default ValentineQuestion;
