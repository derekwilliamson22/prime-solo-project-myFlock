import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ChickenDetails extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_CHICKEN_DETAILS',
      payload: parseInt(this.props.match.params.id),
    });
  }

  returnToMyCoop = () => {
    this.props.history.push('/mycoop')
  }

  editChickenDetails = () => {
    this.props.history.push(`/chicken_edit/${this.props.store.chickenDetails.id}`)
  }

  removeChicken = () => {
    this.props.dispatch({
      type: "REMOVE_CHICKEN",
      payload: Number(`${this.props.store.chickenDetails.id}`)
    })
    this.props.history.push('/mycoop')
  }
  

  render() {    
    return (
      <div className="Dashboard">
        <div className="Details">
       
            <img
              className="DetailsImg"
              src={`${this.props.store.chickenDetails.chicken_image_url}`}
              alt={this.props.store.chickenDetails}
            />
       
      
            <img
              className="DetailsImg"
              src={`${this.props.store.chickenDetails.chicken_egg_image_url}`}
              alt={this.props.store.chickenDetails}
            />
        
          <div className="DetailsInfo">
            <h5>Name: {this.props.store.chickenDetails.name}</h5>
            <h5>Breed: {this.props.store.chickenDetails.breed}</h5>
            <h5>Birthday: {this.props.store.chickenDetails.birthday}</h5>
          </div>
          <div className="DetailsNotes">
            <h5>Notes:</h5>
            <p>{this.props.store.chickenDetails.notes}</p>
          </div>
          <div className="DetailsButtons">
            <button className="btn btn_sizeSm" onClick={this.returnToMyCoop}>Return to myCoop</button>
            <button className="btn btn_sizeSm" onClick={this.editChickenDetails}>Edit Details</button>
            <button className="btn btn_sizeSm" onClick={this.removeChicken}>Remove Chicken</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(ChickenDetails));
