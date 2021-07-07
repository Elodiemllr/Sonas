// == Import npm
import React from 'react';

import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// == Import
import './styles.scss';

// Component
// == Composant
const Menu = () => (
  <div className="menu">
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
          > HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logiciel-de-caisse"
          > Logiciel de caisse
          </NavLink>
        </li>
        <li> <a href="#"> Matériel de caisse </a></li>
        <li> <a href="#"> Contact </a></li>
      </ul>
    </nav>

  </div>
);

// == Export
export default Menu;
