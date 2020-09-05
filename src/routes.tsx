import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/home/index'
import Simulate from './components/simulate/index'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/simulate" component={Simulate} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
