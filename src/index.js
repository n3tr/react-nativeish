import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const bootstrap = (Component) => {
  console.log('bootstrapped')
  ReactDOM.render(<Component />, document.getElementById('root'));
}
bootstrap(App)

if (module.hot) {
  module.hot.accept('./App', () => bootstrap(App))
}

registerServiceWorker();
