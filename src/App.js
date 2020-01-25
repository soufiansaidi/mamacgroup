import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Header from './includes/Header';
import Footer from './includes/Footer';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
            <Route path="/" exact component={ Home } />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
