// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';
// == Import
import './styles.scss';

// Component
import HomePage from '../homePage';
import Footer from '../footer';
import Header from '../header';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <HomePage />
    <Footer />
  </div>
);

// == Export
export default App;
