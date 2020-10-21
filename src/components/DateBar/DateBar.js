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
  // componentDidMount() {
  //   this.sendDateBarDate();
  // }
  
  changeToYesterday = (event) => {
    // const date = format((subDays(new Date(), `${this.props}`)), 'MMMM - dd - yyyy');
    // console.log('what is date', date);
    let date = event.target.value;
    if(date === "yesterday") {
      this.props.dispatch({
        type: "SET_YESTERDAY",
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
  if(date === "tomorrow") {
    this.props.dispatch({
      type: "SET_TOMORROW",
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

//  sendDateBarDate = (date) => {
  
//    console.log('in send datebar date', date);
   
//   //const date = format((subDays(new Date(), this.props.store.date.counterForDate)), 'MMMM - dd - yyyy');
//    this.props.getDateBarDate(date);
//  }

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
let testDate = this.props.store.date
const newDate = format(testDate, 'MMMM - dd - yyyy');
console.log('what is the date', this.props.store.date, testDate);

    return (
      <>
       <input type="image" className="DateArrows" src="images/left_arrow.png" value="yesterday" onMouseDown={this.changeToYesterday}/> 



        {/* {this.props.store.date.counterForDate <= 6 ? 
        <input type="image" className="DateArrows" src="images/left_arrow.png" value="yesterday" onMouseDown={this.changeToYesterday} onMouseUp={this.sendDateBarDate(date)}/> :
        <div className="HiddenArrowLeft" ></div>} 
        {/* <button value="increase" onMouseDown={this.changeToYesterday} onMouseUp={this.goToYesterday(date)}>Yesterday</button> */}
        {/* <h3>{this.state.date}</h3> */}
        <h3>{newDate}</h3>
        {/* <h3>{this.props.store.date}</h3> */}
        {/* {this.props.store.date.counterForDate > 0 ? 
        <input type="image" className="DateArrows" src="images/right_arrow.png" value="tomorrow" onMouseDown={this.changeToTomorrow} onMouseUp={this.sendDateBarDate(date)}/> :
        <div className="HiddenArrowRight" ></div>}       */}
        <input type="image" className="DateArrows" src="images/right_arrow.png" value="tomorrow" onMouseDown={this.changeToTomorrow}/>
      </>
    );
  }
}


export default connect(mapStoreToProps)(DateBar);