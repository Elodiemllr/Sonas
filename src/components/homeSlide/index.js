// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slide1 from '../../../public/slide1.png';
import slide2 from '../../../public/slide2.png';
import slide3 from '../../../public/slide3.png';

// == Composant
const HomeSlide = () => (
  <div className="homeSlide">
    <AwesomeSlider
      bullets={false}
      className="homeSlide__slide"

    >
      <img data-src={slide1} alt="slide1" />
      <img data-src={slide2} alt="slide2" />
      <img data-src={slide3} alt="slide3" />
    </AwesomeSlider>
  </div>
);

// == Export
export default HomeSlide;
