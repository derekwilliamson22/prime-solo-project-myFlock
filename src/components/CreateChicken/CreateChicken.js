import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class CreateChicken extends Component {
  state = {
    newChicken: {
      chickenName: '',
      breed: '',
      birthday: '',
      bio: '',
      imageUrl: '',
      coopId: `${this.props.store.coop.id}`
    }
  };

  createChicken = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'CREATE_CHICKEN',
      payload: this.state.newChicken
    })
    this.setState({
      newChicken: {
        chickenName: '',
        breed: '',
        birthday: '',
        bio: '',
        imageUrl: ''
      }
    })
    this.props.history.push('/mycoop');
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newChicken: {
      ...this.state.newChicken,
      [propertyName]: event.target.value,
      }
    });
  };

  fetchChickens = () => {
    this.props.dispatch({
      type: 'FETCH_CHICKENS',
      url: `api/chicken/${this.props.store.coop.id}`
    });
  }

  render() {
    return (
      <div className="Dashboard">
        <form className="formPanel" onSubmit={this.createChicken}>
          <h2>Add a Chicken</h2>
          {this.props.store.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.registrationMessage}
            </h3>
          )}
          <div>
              <input
                type="text"
                name="chickenName"
                placeholder="Chicken Name"
                value={this.state.newChicken.chickenName}
                onChange={this.handleInputChangeFor('chickenName')}
              />
          </div>
          <div>
            
              <input
                type="text"
                name="breed"
                placeholder="Breed"
                value={this.state.newChicken.breed}
                onChange={this.handleInputChangeFor('breed')}
              />
            
          </div>
          <div>
            
              <input
                type="date"
                name="birthday"
                placeholder="DOB 04/5/2020"
                value={this.state.newChicken.birthday}               
                onChange={this.handleInputChangeFor('birthday')}
              />
            
          </div>
          <div>
            
              <textarea
                type="textarea"
                name="bio"
                placeholder="Character/Habits"
                value={this.state.newChicken.bio}
                onChange={this.handleInputChangeFor('bio')}
              />
            
          </div>
          <div>
            
              <input
                type="text"
                name="imageUrl"
                placeholder="Image Url"
                value={this.state.newChicken.imageUrl}
                onChange={this.handleInputChangeFor('imageUrl')}
              />
            
          </div>
          
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push('/mycoop');
              }}
            >
              Return to myCoop
            </button>
            <input className="btn" type="submit" name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CreateChicken);
