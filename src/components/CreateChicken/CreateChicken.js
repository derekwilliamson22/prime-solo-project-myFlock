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
      chicken_name: '',
      breed: '',
      birthday: '',
      notes: '',
      chicken_image_url: 'images/black_australorp.jpg',
      chicken_egg_image_url: 'images/australorp_egg.png',
      coop_id: this.props.store.coop.id,
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
        chicken_name: '',
        breed: '',
        birthday: '',
        notes: ''
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
        <form className="Details" onSubmit={this.createChicken}>
          {this.props.store.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.registrationMessage}
            </h3>
          )}

            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push('/mycoop');
              }}
            >
              Return to myCoop
            </button>
          <div>
              <input
                type="text"
                name="chicken_name"
                placeholder="Chicken Name"
                value={this.state.newChicken.chicken_name}
                onChange={this.handleInputChangeFor('chicken_name')}
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
                placeholder="04/05/2020"
                value={this.state.newChicken.birthday}               
                onChange={this.handleInputChangeFor('birthday')}
              />
            
          </div>
          <div>
            
              <textarea
                type="textarea"
                name="notes"
                placeholder="Notes"
                value={this.state.newChicken.notes}
                onChange={this.handleInputChangeFor('notes')}
              />
            
          </div>
          <div>
            
              <input
                type="text"
                name="chicken_image_url"
                placeholder="Chicken Image Url"
                value={this.state.newChicken.chicken_image_url}
                onChange={this.handleInputChangeFor('chicken_image_url')}
              />
            
          </div>
          <div>
            
              <input
                type="text"
                name="chicken_egg_image_url"
                placeholder="Chicken Egg Image Url"
                value={this.state.newChicken.chicken_egg_image_url}
                onChange={this.handleInputChangeFor('chicken_egg_image_url')}
              />
            
          </div>
          
            <input className="btn" type="submit" name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CreateChicken);
