import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class CreateChicken extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div className="Dashboard">
        {/* <form className="formPanel" onSubmit={this.createChicken}>
          <h2>Add a Chicken</h2>
          {this.props.store.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.registrationMessage}
            </h3>
          )}
          <div>
              <input
                type="text"
                name="coopName"
                placeholder="Coop Name"
                value={this.state.newUser.coopName}
                required
                onChange={this.handleInputChangeFor('coopName')}
              />
          </div>
          <div>
            
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.newUser.firstName}
                required
                onChange={this.handleInputChangeFor('firstName')}
              />
            
          </div>
          <div>
            
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.newUser.lastName}
                required
                onChange={this.handleInputChangeFor('lastName')}
              />
            
          </div>
          <div>
            
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.newUser.username}
                required
                onChange={this.handleInputChangeFor('username')}
              />
            
          </div>
          <div>
            
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.newUser.password}
                required
                onChange={this.handleInputChangeFor('password')}
              />
            
          </div>
          
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push('/login');
              }}
            >
              Return to Login
            </button>
            <input className="btn" type="submit" name="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CreateChicken);
