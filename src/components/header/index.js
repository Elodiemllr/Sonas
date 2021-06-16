// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Menu from '../menu';
import Logo from '../logo';
import TryButton from '../tryButton';

// == Composant
const Header = () => (
  <div className="header">
    <div className="header__principal">
      <Logo className="header__logo" />
      <TryButton className="header__button" />
      <p className="header__phone"> (+352) 621 272 749 </p>
    </div>
    <Menu />
  </div>
);

// == Export
export default Header;
