import { hydrate } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import Loadable from 'react-loadable'
import app from './app'
const initialState = window && window.__INITIAL_STATE__
let history = createHistory()
let { configuraStore, createApp } = app
let store = configuraStore(initialState)

const renderApp = () => {
  let application = createApp({ store, history })
  hydrate(application, document.getElementById('root'))
}

Loadable.preloadReady().then(() => {
  renderApp()
})

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./store/reducers/index.js', () => {
      let newReducer = require('./store/reducers/index.js')
      store.replaceReducer(newReducer)
    })
    module.hot.accept('./app/index.js', () => {
      let { createApp } = require('./app/index.js')
      let newReducer = require('./store/reducers/index.js')
      store.replaceReducer(newReducer)
      let application = createApp({ store, history })
      hydrate(application, document.getElementById('root'))
    })
  }
}

