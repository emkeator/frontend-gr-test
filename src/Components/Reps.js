import React, { Component } from 'react'
import RepDetail from './RepDetail'

export default class RepsList extends Component {

  constructor() {
      super()
      this.state = {
        selected_rep: {}
      }
      
  }

  selectRep(index) {
    this.setState({
        selected_rep: this.props.reps[index]
    }, () =>console.log(this.state))
  }

  render() {
    return (
      <div className="Reps">
        <div className="repsList">
          <h1>List / <em>{`${this.props.repType}s`}</em></h1>
          <ul>
              <li className="headerLi"><h2>Name</h2><h3>Party</h3></li>
              {this.props.reps.map((rep, index) => {
                  return <li key={index} onClick={() => this.selectRep(index)}>
                      <h2>{rep.name}</h2>
                      <h3>{rep.party.slice(0, 1)}</h3>
                  </li>
              })}
          </ul>
        </div>
        <RepDetail rep={this.state.selected_rep}/>
      </div>

    )
  }
}
