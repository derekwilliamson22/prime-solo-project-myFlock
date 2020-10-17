import React, { Component } from 'react';
import { connect } from 'react-redux';


class Clock extends Component {
  state = {
    date: new Date()
  };
  

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default connect()(Clock);