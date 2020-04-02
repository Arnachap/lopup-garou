import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import Routes from './components/routing/Routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route component={Routes} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
