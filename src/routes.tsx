import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/home'
import Simulate from './containers/simulate'
import { TargetAmount } from './pages/target-amount'
import { Term } from './pages/term'
import { Bonus } from './pages/bonus'
import { Result } from './pages/result'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/result" component={Result} />
        <Route path="/simulate" component={Simulate} />
        <Route path="/target-amount" component={TargetAmount} />
        <Route path="/term" component={Term} />
        <Route path="/bonus" component={Bonus} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
