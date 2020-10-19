import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ChickenList from '../ChickenList/ChickenList';
import { withRouter } from 'react-router-dom';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyCoopPage extends Component {

  componentDidMount(){
    this.props.dispatch({
      type: 'FETCH_CHICKENS'
    });
  }

  addChicken = () => {
    this.props.history.push('/chicken_form')
  }

  render() {
    return (
      <div className="Dashboard">
       <h3>myCoop</h3>
       <ChickenList />
       <button className="btn" onClick={this.addChicken}>Add a Chicken</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(MyCoopPage));
