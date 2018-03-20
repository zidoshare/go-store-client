import React from 'react'
import { hydrate, render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import Loadable from 'react-loadable'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
const initialState = window && window.__INITIAL_STATE__
import { Provider } from 'react-redux'
import configuraStore from './store/configureStore'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
let store = configuraStore(initialState)

const renderApp = () => {
  const renderMethod = process.env.NODE_ENV === 'development' ? render : hydrate
  renderMethod(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(Routes)}
      </ConnectedRouter>
    </Provider>, document.getElementById('root'))
}

Loadable.preloadReady().then(renderApp)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./reducers/index.js', () => {
      let newReducer = require('./reducers/index.js')
      store.replaceReducer(newReducer)
    })
    module.hot.accept('./Routes.js', () => {
      let newReducer = require('./reducers/index.js')
      store.replaceReducer(newReducer)
      render(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            {renderRoutes(Routes)}
          </ConnectedRouter>
        </Provider>, document.getElementById('root'))
    })
  }
}

