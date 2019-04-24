import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import { configureStore, history } from './store';
import App from './containers/App';
import setAuthToken from './utils/setAuthToken';

const store = configureStore();

let userStr = localStorage.getItem('user');

if (userStr) {
  let user = JSON.parse(userStr);
  if (user.token) {
    setAuthToken(user.token);
  }
}

class MainApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default MainApp;
