import React, { Component } from 'react'
import './App.css'
import Search from './Components/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Who's My Representative?</h1>
        </header>
        <Search/> 
      </div>
    )
  }
}

export default App
