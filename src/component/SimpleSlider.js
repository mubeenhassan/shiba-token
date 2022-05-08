import React from "react";
import Slider from "react-slick";
import artImg1 from '../assets/images/art1.png'
import artImg2 from '../assets/images/art2.png'
import artImg3 from '../assets/images/art10.png'
import artImg4 from '../assets/images/art4.png'
import artImg5 from '../assets/images/art17.png'


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: (window.screen.width < 768) ? 1:3,
    arrow:true,
    slidesToScroll: 1
  };
  return (
    <div className="slider">
    <Slider {...settings}>
        <img src={artImg1} alt="" />
      <img src={artImg2} alt="" />
     
      <img src={artImg3} alt="" />
   
      <img src={artImg4} alt="" />
    
      <img src={artImg5} alt="" />
  
    </Slider>
    </div>

  );
}