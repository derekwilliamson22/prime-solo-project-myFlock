import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ChickenList from '../ChickenList/ChickenList';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyCoopPage extends Component {
  state = {
    heading: 'MyCoopPage',
  };

  getDetails = () => {
    console.log('in get details');
    
  }

  addChicken = () => {
    console.log('in add chicken');
    
  }

  render() {
    return (
      <div className="Dashboard">
       <h3>myCoop</h3>
       <ChickenList />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MyCoopPage);
