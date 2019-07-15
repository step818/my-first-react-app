import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { createStore } from 'redux';
import ticketListReducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';

import App from './components/App';

import { HashRouter } from 'react-router-dom';

const store = createStore(ticketListReducer);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter> , 
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */