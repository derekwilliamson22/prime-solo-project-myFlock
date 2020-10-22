import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {format} from 'date-fns';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ServicePage extends Component {
  state = {
    newServiceRequest: {
      date: format(new Date(), 'MMMM - dd - yyyy'),
      user_id: this.props.store.user.id,
      requestForFeed: '',
      requestForCleaning: '',
      otherNotes: '',
    }
  };

  sendServiceRequest = () => {
    
  }

  render() {
    console.log('what are my service props', this.props);
    
    return (
      <div className="Dashboard">
        <h2>Service Coming Soon...</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ServicePage);
