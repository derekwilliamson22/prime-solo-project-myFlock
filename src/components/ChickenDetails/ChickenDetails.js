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
  

  render() {    
    return (
      <div className="Details">
        <div className="DetailsImg">
          <img
            src={`${this.props.store.chickenDetails.imageUrl}`}
            alt={this.props.store.chickenDetails}
          />
        </div>
        <div className="DetailsInfo">
          <h5>Name: {this.props.store.chickenDetails.name}</h5>
          <h5>Breed: {this.props.store.chickenDetails.breed}</h5>
          <h5>Birthday: {this.props.store.chickenDetails.birthday}</h5>
        </div>
        <div className="DetailsBio">
          <h4>Character/Habits:</h4>
          <p>{this.props.store.chickenDetails.bio}</p>
        </div>
        <div className="DetailsButtons">
          <button onClick={this.returnToMyCoop}>Return to myCoop</button>
          <button>Edit Details</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(ChickenDetails));
