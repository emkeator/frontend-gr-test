import React, { Component } from 'react'

export default class RepDetail extends Component {


  render() {
    return (
      <div className="RepDetail">
        <h1>Info</h1>
        {
            this.props.rep.name ? 

            <div>
                <h2>{this.props.rep.name.split(' ')[0]}</h2>
                <h2>{this.props.rep.name.split(' ')[1]}</h2>
                <h2>District: {this.props.rep.district || 'N/A'}</h2>
                <h2>+{this.props.rep.phone}</h2>
                <h2>{this.props.rep.office}</h2>
                <a className="link" target="_blank" href={this.props.rep.link}>Website</a>
            </div>

            :

            <div>
                <h2>First Name</h2>
                <h2>Last Name</h2>
                <h2>District</h2>
                <h2>Phone</h2>
                <h2>Office</h2>
                <a className="link" >Website</a>
            </div>

        }
      </div>

    )
  }
}
