import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ServiceConfirmationPage extends Component {
  

  render() {
    return (
      <div className="Dashboard">
        <div className="Details">
        <h2>BOK! BOK!</h2>
        <h3>Service Request Submitted!</h3>
        <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push('/service');
            }}
          >
            Return to Service Page
        </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(ServiceConfirmationPage));
