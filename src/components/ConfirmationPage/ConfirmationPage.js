import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ConfirmationPage extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div>
        <h2>BOK! BOK!</h2>
        <h3>You're registered!</h3>
        <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push('/login');
            }}
          >
            Return to Login
        </button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(ConfirmationPage));
