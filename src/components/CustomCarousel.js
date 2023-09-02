import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';

const CustomCarousel = ({ img }) => {
  if (!img || img.length === 0) {
    // Handle the case when img is undefined or empty
    return <div>No images to display</div>;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {img.map((e, index) => (
        <div key={index}>
          <img src={e} alt="" draggable={false} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
