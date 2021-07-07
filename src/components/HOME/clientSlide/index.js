// == Import npm

import React from 'react';
// == Import
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import slide1 from '../../../../public/slide1.png';
import './styles.scss';

const settings = {
  slidesToShow: 3,
};
// == Composant
const ClientSlide = () => (
  <Slider {...settings} className="clientslide">

    <img src={slide1} alt="slide1" />
    <img src={slide1} alt="slide1" />
    <img src={slide1} alt="slide1" />
    <img src={slide1} alt="slide1" />
    <img src={slide1} alt="slide1" />

  </Slider>

);

// == Export
export default ClientSlide;
