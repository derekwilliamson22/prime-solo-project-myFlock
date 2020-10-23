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
      <div className="DataDashboard">
        <table>
          <thead>
          <tr>
            <th>Chicken Name</th>
            <th>Last 6 Months</th>
          </tr>
          </thead>
          <tbody>
          {this.props.store.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.sum}</td>

              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MyStatsPage);
