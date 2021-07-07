// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// == Import
import './styles.scss';

// Component
import Home from 'src/containers/Home';
import Software from 'src/containers/Software';
import Footer from '../footer';
import Header from '../header';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/logiciel-de-caisse" component={Software} exact />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
