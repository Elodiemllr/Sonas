// == Import npm
import React from 'react';
// == Import
import './styles.scss';

import HomeSlide from '../homeSlide';
import Video from '../video';
import ContactButton from '../contactButton';
import TryButton from '../tryButton';
// == Composant
const HomePage = () => (
  <div className="homePage">
    <div className="homePage__slide">
      <HomeSlide />
    </div>
    <div className="homePage__video">
      <Video />
      <ContactButton />
      <TryButton />
    </div>
    <div className="homePage__proposition">
      <h3> Ce qu'on vous propose </h3>
      <p> Notre but ? répondre à toutes vos attentes </p>
    </div>

  </div>
);

// == Export
export default HomePage;
