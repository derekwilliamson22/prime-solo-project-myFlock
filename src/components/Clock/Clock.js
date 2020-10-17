import React, { Component } from 'react';
import { connect } from 'react-redux';


class Clock extends Component {
  state = {
    date: new Date(),
    dateBar: new Date().toLocaleDateString(
      'en-gb',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'utc'
      }
    ),
  };
  
  

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>{this.state.dateBar}</h2>
      </div>
    );
  }
}

export default connect()(Clock);