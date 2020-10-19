import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EditChickenDetails extends Component {
  state = {
    updatedChickenDetails: {
      chickenName: '',
      breed: '',
      birthday: '',
      bio: '',
    }
  };

  returnToChickenDetails = () => {
    this.props.history.push(`/chicken_details/${this.props.match.params.id}`);
  }

  updateChicken = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'UPDATE_CHICKEN_DETAILS',
      payload: this.state.updatedChickenDetails
    })
    this.returnToChickenDetails()
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      updatedChickenDetails: {
      ...this.state.updatedChickenDetails,
      [propertyName]: event.target.value,
      }
    });
  };

  render() {
    return (
      <div className="EditDetails">
        <div>
          <input
            type="text"
            name="chickenName"
            placeholder={this.props.store.chickenDetails.name}
            value={this.state.updatedChickenDetails.chickenName}
            onChange={this.handleInputChangeFor('chickenName')}
          />
        </div>
        <div>  
          <input
            type="text"
            name="breed"
            placeholder={this.props.store.chickenDetails.breed}
            value={this.state.updatedChickenDetails.breed}
            onChange={this.handleInputChangeFor('breed')}
          />
        </div>
        <div>
          <input
            type="date"
            name="birthday"
            placeholder={this.props.store.chickenDetails.birthday}
            value={this.state.updatedChickenDetails.birthday}               
            onChange={this.handleInputChangeFor('birthday')}
          /> 
        </div>
        <div>
          <textarea
            type="textarea"
            name="bio"
            placeholder={this.props.store.chickenDetails.bio}
            value={this.state.updatedChickenDetails.bio}
            onChange={this.handleInputChangeFor('bio')}
          />
        </div>
    </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(EditChickenDetails));
