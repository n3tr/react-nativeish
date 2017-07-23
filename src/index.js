import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import configureStore from './store/configure-store'

const store = configureStore()
const bootstrap = (Component) => {
  console.log('bootstrapped')
  ReactDOM.render(<Provider store={store}><Component /></Provider>, document.getElementById('root'))
}
bootstrap(App)

if (module.hot) {
  module.hot.accept('./App', () => bootstrap(App))
}

registerServiceWorker()
