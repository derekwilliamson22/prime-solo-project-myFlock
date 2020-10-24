import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ChickenList from '../ChickenList/ChickenList';
import { withRouter } from 'react-router-dom';
import { format } from 'date-fns';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyCoopPage extends Component {

  componentDidMount(){
  this.getChickens();
  this.getChickenLayingData();
  }
  
  getChickenLayingData = () => {
    const newDate = format(this.props.store.date, 'MMMM - dd - yyyy');
    const layingData =
    {
      date: newDate,
      coop_id: this.props.store.coop.id
    }
    this.props.dispatch({
      type: 'FETCH_CHICKEN_LAYING_DATA',
      payload: layingData
    });
  }

  getChickens = () => {
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
        {this.props.store.user.authLevel === 'admin' ?
          <div className="Details">
            <button className="AdminBtn">Service Requests</button>
            <button className="AdminBtn">Registered Users</button>
          </div>
          :
          <div className="MyCoopList">
            <h3 className="DateContents">myCoop</h3>
            <ChickenList />
            <button className="btn" onClick={this.addChicken}>Add a Chicken</button>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(MyCoopPage));
