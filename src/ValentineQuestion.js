import React, { useEffect, useState, useMemo } from "react";
import './ValentineQuestion.css'; // Add a CSS file to style this component

const ValentineQuestion = ({ onAnswer }) => {

  const yourImageArray = useMemo(() => [
    require('./images/IMG_2672.jpg'),
    require('./images/IMG_2673.jpg'),
    require('./images/IMG_2684.jpg'),
    require('./images/IMG_2687.jpg'),
    require('./images/IMG_2688.jpg'),
    require('./images/IMG_2689.jpg'),
    require('./images/IMG_2779.jpg'),
    require('./images/IMG_2800.jpg'),
    require('./images/IMG_2811.jpg'),
    require('./images/IMG_3055.jpg'),
    require('./images/IMG_3055.jpg'),
    require('./images/IMG_3056.jpg'),
    require('./images/IMG_3057.jpg'),
    require('./images/IMG_3058.jpg'),
    require('./images/IMG_3059.jpg'),
    require('./images/IMG_3060.jpg'),
    require('./images/IMG_3061.jpg'),
    require('./images/IMG_3062.jpg'),
    require('./images/IMG_3063.jpg'),
    require('./images/IMG_3064.jpg'),



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
