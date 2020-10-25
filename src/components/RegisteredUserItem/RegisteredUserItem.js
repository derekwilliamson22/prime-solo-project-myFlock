import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import userSaga from '../../redux/sagas/user.saga';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class RegisteredUserItem extends Component {

  render() {
    console.log('what is the user', this.props.user);
    
    return (
      <div className="UsersBar">
        <p>Coop Name: {this.props.user.coop_name}</p>
        <p>Username: {this.props.user.username}</p>
        <p>First Name: {this.props.user.first_name}</p>
        <p>Last Name: {this.props.user.last_name}</p>
        <p>Address: {this.props.user.address}</p>
        <p>ZipCode: {this.props.user.zipcode}</p>
        <p>Email: {this.props.user.email}</p>
        <p>Phone: {this.props.user.phone}</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisteredUserItem);
