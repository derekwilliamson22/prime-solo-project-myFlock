import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { format, subMonths } from 'date-fns';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyStatsPage extends Component {
  componentDidMount(){
    this.getLayingData();
  }

  getLayingData = () => {
    const previousDate = format(subMonths(new Date(), 6), 'MMMM - dd - yyyy');
    const newDate = format(new Date(), 'MMMM - dd - yyyy');
    const coopId = this.props.store.coop.id
    const dateObject = {
      newDate,
      previousDate,
      coopId
    }

    this.props.dispatch({
      type: "FETCH_LAYING_DATA",
      payload: dateObject
    })
  }

  render() {
    return (
      <div className="Dashboard">
        <ul>
          {this.props.store.data.map((item, index) => {
            return (
            <li key={index}>
                <h5>Name: {item.name}</h5>
                <h5>Total Eggs in the last six months: {item.sum}</h5>

            </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MyStatsPage);
