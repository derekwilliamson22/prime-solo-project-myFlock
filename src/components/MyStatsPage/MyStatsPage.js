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
    const newDate = format(subMonths(new Date(), 6),'MMMM - dd - yyyy');
    this.props.dispatch({
      type: "FETCH_LAYING_DATA",
      payload: newDate
    })
  }

  render() {
    return (
      <div className="Dashboard">
        <div>
          {this.props.store.data.map((item, index) => {




          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MyStatsPage);
