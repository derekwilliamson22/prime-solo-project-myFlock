import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyStatsPage extends Component {
  state = {
    heading: 'MyStatsPage',
  };

  render() {
    return (
      <div className="Dashboard">
        <h2>Coming Soon...</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MyStatsPage);
