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
    return (
      <div className="MyCoopBar">
        {/* <h2>{user.name}</h2> */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisteredUserItem);
