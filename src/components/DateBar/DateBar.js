import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format, addDays, subDays } from 'date-fns';
import mapStoreToProps from '../../redux/mapStoreToProps';





// const date = format(new Date(), 'MMMM - dd - yyyy');
// console.log('what is the date', date);
// console.log('what the props', this.props.store);


let currentDate = format((subDays(new Date(), 0)), 'MMMM - dd - yyyy');

// console.log('what is date', date);

// const tomorrow = format((addDays(new Date(), 1)), 'MMMM - dd - yyyy');

// console.log('what is tomorrow', tomorrow);


class DateBar extends Component {
  state = {
    date: format((subDays(new Date(), this.props.store.date.counterForDate)), 'MMMM - dd - yyyy')
  };

  changeDate = (event) => {
    console.log('what the props', this.props.store.date.counterForDate);
    // const date = format((subDays(new Date(), `${this.props}`)), 'MMMM - dd - yyyy');
    
    // console.log('what is date', date);
    console.log('what is date change', event.target.value);
    let date = event.target.value;
    console.log('what is date', date);
    
    if(date === "increase") {
      this.props.dispatch({
        type: "SET_INCREASE",
      });
    }
    if(date === "decrease") {
      this.props.dispatch({
        type: "SET_DECREASE",
      });
    }
    this.setState({
      ...this.state,
      date: format((subDays(new Date(), this.props.store.date.counterForDate)), 'MMMM - dd - yyyy'),
    }) 
 }

  render() {
    return (
      <div className="DateBar">
        <button value="increase" onClick={this.changeDate}>Yesterday</button>
        <h3>{this.state.date}</h3>
        <button value="decrease" onClick={this.changeDate}>Tomorrow</button>
      </div>
    );
  }
}


export default connect(mapStoreToProps)(DateBar);