import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ServiceRequestsPage extends Component {
  state = {
    heading: 'ServiceRequestsPage',
  };

  render() {
    return (
      <div className="Dashboard">
        <h2>hello</h2>
        <button className="AdminBtn" onClick={() => this.props.history.push('/mycoop')}>Return to Admin Menu</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ServiceRequestsPage);
