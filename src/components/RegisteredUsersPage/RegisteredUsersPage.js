import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class RegisteredUsersPage extends Component {
  state = {
    heading: 'RegisteredUsersPage',
  };

  render() {
    return (
      <div className="Dashboard">
        <h2>{this.state.heading}</h2>
        <button 
        className="AdminBtn" 
        onClick={() => this.props.history.push('/mycoop')}
        >
        Return to Admin Menu
        </button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisteredUsersPage);
