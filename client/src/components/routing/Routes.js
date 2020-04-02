import React, { useState, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../index/Index';

const Routes = () => {
  return (
    <Fragment>
      <Route exact path='/' component={Index} />
    </Fragment>
  );
};

export default Routes;
