// == Import npm
import React from 'react';
import logoImg from '../../../public/logoImg.png';

// == Import
import './styles.scss';
// == Composant
const Logo = () => (
  <div className="logo">
    <img src={logoImg} alt="logo" className="logo__img" />
  </div>
);

// == Export
export default Logo;
