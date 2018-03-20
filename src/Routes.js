import React from 'react'
import Loadable from 'react-loadable'
import { homeInit } from './actions'

const Loading = () => {
  return <div>Loading...</div>
}

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'./pages/Home'),
  loading: Loading,
})

const routesConfig = [{
  path: '/',
  exact: true,
  component: LoadableHome,
  init: homeInit,
}]

export default routesConfig