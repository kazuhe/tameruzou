import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { TargetAmount } from './pages/target-amount'
import { Term } from './pages/term'
import { BonusMonth } from './pages/bonus-month'
import { BonusMoney } from './pages/bonus-money'
import { Result } from './pages/result'
import { NotFound } from './pages/not-found'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/target-amount" component={TargetAmount} />
        <Route path="/term" component={Term} />
        <Route path="/bonus-month" component={BonusMonth} />
        <Route path="/bonus-money" component={BonusMoney} />
        <Route path="/result" component={Result} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
