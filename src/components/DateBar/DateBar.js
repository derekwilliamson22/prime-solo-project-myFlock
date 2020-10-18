import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format, addDays, subDays } from 'date-fns';
import mapStoreToProps from '../../redux/mapStoreToProps';





// const date = format(new Date(), 'MMMM - dd - yyyy');
// console.log('what is the date', date);
// console.log('what the props', this.props.store);


//let currentDate = format((subDays(new Date(), 0)), 'MMMM - dd - yyyy');

// console.log('what is date', date);

// const tomorrow = format((addDays(new Date(), 1)), 'MMMM - dd - yyyy');

// console.log('what is tomorrow', tomorrow);


class DateBar extends Component {
  // state = {
  //   // date: format((subDays(new Date(), this.props.store.date.counterForDate)), 'MMMM - dd - yyyy'),
  //   counter: this.props.store.date.counterForDate
  // }

  changeToYesterday = (event) => {
    // const date = format((subDays(new Date(), `${this.props}`)), 'MMMM - dd - yyyy');
    // console.log('what is date', date);
    console.log('what is date change', event.target.value);
    let date = event.target.value;
    if(date === "increase") {
      this.props.dispatch({
        type: "SET_INCREASE",
      });
    }
    // this.setState({
    //   ...this.state,
    //   date: format((subDays(new Date(), this.props.store.date.counterForDate)), 'MMMM - dd - yyyy')
    // }) 
    // this.setState({
    //   ...this.state,
    //   counter: this.props.store.date.counterForDate
    // })

 }

 changeToTomorrow = (event) => {
   // const date = format((subDays(new Date(), `${this.props}`)), 'MMMM - dd - yyyy');
  
  // console.log('what is date', date);
  console.log('what is date change', event.target.value);
  let date = event.target.value;
  if(date === "decrease") {
    this.props.dispatch({
      type: "SET_DECREASE",
    });
  }
  // this.setState({
  //   ...this.state,
  //   date: format((subDays(new Date(), this.props.store.date.counterForDate)), 'MMMM - dd - yyyy')
  // }) 
  // this.setState({
  //   ...this.state,
  //   counter: this.props.store.date.counterForDate
  // })
 }

 goToYesterday = (dateId) => {
   console.log('what is the date in goToYesterday', dateId);
   
  
  // this.props.dispatch({
  //    type: 'FETCH_COOP_DATA'
  //  })
 }

 goToTomorrow = (dateId) => {
  console.log('what is the date in goToTomorrow', dateId);
  
 
 // this.props.dispatch({
 //    type: 'FETCH_COOP_DATA'
 //  })
}

 
  render() {
  
  const date = format((subDays(new Date(), this.props.store.date.counterForDate)), 'MMMM - dd - yyyy');

    return (
      <div className="DateBar">
        <button value="increase" onMouseDown={this.changeToYesterday} onMouseUp={this.goToYesterday(date)}>Yesterday</button>
        {/* <h3>{this.state.date}</h3> */}
        <h3>{date}</h3>
        {/* <h3>{this.props.store.date}</h3> */}
        {this.props.store.date.counterForDate > 0 ? 
        <button value="decrease" onMouseDown={this.changeToTomorrow} onMouseUp={this.goToTomorrow(date)}>Tomorrow</button> :
        ''}      
      </div>
    );
  }
}


export default connect(mapStoreToProps)(DateBar);