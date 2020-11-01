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
        <Route path="/target-amount" exact component={TargetAmount} />
        <Route path="/term" exact component={Term} />
        <Route path="/bonus-month" exact component={BonusMonth} />
        <Route path="/bonus-money" exact component={BonusMoney} />
        <Route path="/result" exact component={Result} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
