import React, { useState, useEffect } from 'react';

const Carousel = ({ imgUrl }) => {
   // console.log('imgUrl:', imgUrl);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgUrl.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [imgUrl]);

  return (
    <div className="image-carousel">
      {imgUrl && imgUrl.length > 0 ? (
        <img src={imgUrl[currentImageIndex]} alt="" />
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default Carousel;
