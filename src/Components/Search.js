import React, { Component } from 'react'
import axios from 'axios'
import Reps from './Reps'

export default class Search extends Component {

  constructor() {
      super()
      this.state = {
          states: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
          selected_type: 'representative',
          selected_state: '',
          reps: []
        }
  }

  handleChange(event, toHandle){
      switch (toHandle) {
          case 'type':
              this.setState({
                  selected_type: event.target.value
              })
              break

          case 'state':
              this.setState({
                  selected_state: event.target.value
              })
              break
      
          default:
              break
      }
  }

  getReps(){
      if(!this.state.selected_state){
        alert('Please select a type of representative, and a state.')
        return undefined
      }
      
      axios.get(`/${this.state.selected_type}s/${this.state.selected_state}`).then(apiRes => {
        console.log(apiRes)
        this.setState({
             reps: apiRes.data.results
         })
      })

  }



  render() {
    return (
      <div className="Search">
        <div className="searchDiv">
            <select className="typeSelect" value={this.state.selected_type} onChange={(e) => this.handleChange(e, 'type')}>
                <option value="representative">Representative</option>
                <option value="senator">Senator</option>
            </select>
            <select className="stateSelect" value={this.state.selected_state} onChange={(e) => this.handleChange(e, 'state')}>
                <option value=""></option>
                {this.state.states.map(e => {
                    return <option key={e} value={e}>{e}</option>
                })}
            </select>
            <button onClick={() => this.getReps()} disabled={this.state.selected_state === ''}>Submit</button>
        </div>
        <Reps reps={this.state.reps} repType={this.state.selected_type}/>
      </div>
    )
  }
}
