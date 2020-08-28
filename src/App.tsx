import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

class App extends Component {
  render() {
    const logoAttrs = {
      alt: 'logo',
      className: 'App-logo',
      src: logo,
    }
    const title = 'Hello React!'
    const targets = ['Nyan!', 'Wan!']

    return (
      <div className="App">
        <header className="App-header">
          <img {...logoAttrs} />
          {title && <p>{title}</p>}
          {targets.map((target) => (
            <p>Hello {target}!</p>
          ))}
        </header>
      </div>
    )
  }
}

export default App
