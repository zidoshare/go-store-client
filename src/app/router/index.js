import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import routesConfig from './routes'
import PropTypes from 'prop-types'
const Routers = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      {routesConfig.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </div>
  </ConnectedRouter>
)
Routers.propTypes = {
  history:PropTypes.object.isRequired,
}
export default Routers