import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';


class DateBar extends Component {
  state = {
    date: new Date(),
    dateBar: new Date().toLocaleDateString(
      'en-us',
      {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
        timeZone: 'cst'
      }
    ),
    newDate: format(new Date(), 'MMMM-dd-yyyy'),
  };
  
   

  render() {
    return (
      <div className="DateBar">
        <h2>{this.state.newDate}</h2>
      </div>
    );
  }
}

export default connect()(DateBar);