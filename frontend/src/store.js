import { applyMiddleware, compose, createStore } from 'redux';
import { createHashHistory } from 'history';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const history = createHashHistory();
const middlewares = [thunk];
const env = process.env.NODE_ENV;

if (env === 'development') {
  middlewares.push(logger);
}

function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  if (env === 'development' && module.hot) {
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export { history, configureStore };
