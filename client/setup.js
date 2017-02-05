'use strict';

/**
 * Dependencies
 */
import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { store, connector } from './store';
import AppContainer from './containers/App';

import Home from './views/Home';

/**
 * Configuration
 */

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute name="home" component={Home} />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  </Provider>
);

/**
 * Declaration
 */
Meteor.startup(() => {
  render(routes, document.getElementById('app'));
});
