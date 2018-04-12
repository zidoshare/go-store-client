import React from 'react'
import { renderRoutes,matchRoutes } from 'react-router-config'
import PropTypes  from 'prop-types'
export default class MainLayout extends React.Component{
  state  = {
    current: '/',
  }
  static propTypes = {
    route: PropTypes.object.isRequired,
  }
  render(){
    const {routes} = this.props.route 
    console.log(matchRoutes(routes,this.props.route.path))
    return (
      <div className="main-container">
        <div className="main-content">
          {renderRoutes(routes)} 
        </div>
        <div>
        </div>
      </div>
    )
  }
}
