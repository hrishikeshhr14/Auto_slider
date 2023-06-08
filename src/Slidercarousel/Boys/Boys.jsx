import React from 'react';
import Boyss from './BBoys';
import "./Bstyle.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Boys = () => {
  const boys = [
    {
      name: ' item 1',
      image:'item 1.png'
    },
    {
      name: 'item 2',
      
      image: 'item 2.png'
    },
    {
      name: 'item 3',
      
      image: 'item 3.png'
    },
    {
      name: 'item 4',
      
      image: 'item 4.png'
    },
    {
      name: 'item 5',
    
      image: 'item 5.png'
    },
    {
      name: 'item 6',
      
      image: 'item 6.png'
    },
    {
      name: 'item 7',
    
      image: 'item 7.png'
    },
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  function getSlidesToShow() {
    const viewportWidth = window.innerWidth;
    return viewportWidth < 768 ?1 : 4;
  }

  return (
    <div className="boys-section">
       <h1>Heading</h1>
      <Slider {...settings}>
        {boys.map((boys, index) => (
          <Boyss
            key={index}
            name={boys.name}
            image={boys.image}
          />
        ))}
      </Slider>
     
    </div>
  );
};

export default Boys;
