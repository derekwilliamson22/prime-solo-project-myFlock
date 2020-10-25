import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ServiceRequestItem extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div className="UsersBar">
        <p>Date: {this.props.request.date}</p>
        <p>First Name: {this.props.request.first_name}</p>
        <p>Last Name: {this.props.request.last_name}</p>
        <p>Request for Feed: 
          {this.props.request.requestForFeed === true ?
          ' Yes' :
          ' No'}</p>
        <p>Request for Cleaning: 
          {this.props.request.requestForCleaning === true ?
          ' Yes' :
          ' No'}</p>
        <p>Other Notes: {this.props.request.otherNotes}</p>
        <p>Address: {this.props.request.address}</p>
        <p>ZipCode: {this.props.request.zipcode}</p>
        <p>Email: {this.props.request.email}</p>
        <p>Phone: {this.props.request.phone}</p>
        <button className="btn btn_sizeSm">Remove Request</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ServiceRequestItem);
