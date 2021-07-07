// == Import npm
import React from 'react';
// == Import
import './styles.scss';

import HomeSlide from '../homeSlide';
import Video from '../../video';
import ContactButton from '../../contactButton';
import TryButton from '../../tryButton';
import Proposition from '../proposition';
import ProductSlide from '../productSlide';
import ClientSlide from '../clientSlide';
// == Composant
const Home = () => (
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
      <Proposition />
    </div>
    <div className="homePage__productSlide">
      <h3> Du materiel de qualité</h3>
      <h4> accessible à tous</h4>
      <ProductSlide />
    </div>
    <div className="homePage__clientSlide">
      <h3> Il nous font confiance </h3>
      <ClientSlide />
    </div>
  </div>
);

// == Export
export default Home;
