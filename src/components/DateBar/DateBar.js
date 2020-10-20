import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format, subDays } from 'date-fns';
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
  componentDidMount() {
    this.sendDateBarDate();
  }
  
  changeToYesterday = (event) => {
    // const date = format((subDays(new Date(), `${this.props}`)), 'MMMM - dd - yyyy');
    // console.log('what is date', date);
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

 sendDateBarDate = () => {
  const date = format((subDays(new Date(), this.props.store.date.counterForDate)), 'MMMM - dd - yyyy');
   this.props.getDateBarDate(date);
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
      <>
        {this.props.store.date.counterForDate <= 6 ? 
        <input type="image" className="DateArrows" src="images/left_arrow.png" value="increase" onMouseDown={this.changeToYesterday} onMouseUp={this.goToYesterday(date)}/> :
        <div className="HiddenArrowLeft" ></div>} 
        {/* <button value="increase" onMouseDown={this.changeToYesterday} onMouseUp={this.goToYesterday(date)}>Yesterday</button> */}
        {/* <h3>{this.state.date}</h3> */}
        <h3>{date}</h3>
        {/* <h3>{this.props.store.date}</h3> */}
        {this.props.store.date.counterForDate > 0 ? 
        <input type="image" className="DateArrows" src="images/right_arrow.png" value="decrease" onMouseDown={this.changeToTomorrow} onMouseUp={this.goToTomorrow(date)}/> :
        <div className="HiddenArrowRight" ></div>}      
      </>
    );
  }
}


export default connect(mapStoreToProps)(DateBar);