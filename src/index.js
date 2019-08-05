import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import './index.scss';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
