import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegisterForm extends Component {
  state = {
    newUser: {
      coopName: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      address: '',
      zipcode: '',
      email: '',
      phone: '',
    }
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: this.state.newUser
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newUser: {
      ...this.state.newUser,
      [propertyName]: event.target.value,
      }
    });
  };

  render() {
    return (
      <div>
        <form className="formPanel" onSubmit={this.registerUser}>
          <h2>Please Fill Out All Fields</h2>
          {this.props.store.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.registrationMessage}
            </h3>
          )}
          <div>
            <label htmlFor="coopName">
              Coop Name:
              <input
                type="text"
                name="coopName"
                value={this.state.newUser.coopName}
                required
                onChange={this.handleInputChangeFor('coopName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.state.newUser.firstName}
                required
                onChange={this.handleInputChangeFor('firstName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.state.newUser.lastName}
                required
                onChange={this.handleInputChangeFor('lastName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.newUser.username}
                required
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.newUser.password}
                required
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="address">
              Address:
              <input
                type="text"
                name="address"
                value={this.state.newUser.address}
                required
                onChange={this.handleInputChangeFor('address')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="zipcode">
              Zipcode:
              <input
                type="text"
                name="zipcode"
                value={this.state.newUser.zipcode}
                required
                onChange={this.handleInputChangeFor('zipcode')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                value={this.state.newUser.email}
                required
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone:
              <input
                type="text"
                name="phone"
                placeholder="(XXX)XXX-XXXX"
                value={this.state.newUser.phone}
                required
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>
          </div>
          <div>
            <input className="btn" type="submit" name="submit" value="Submit" />
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push('/login');
            }}
          >
            Return to Login2
        </button>
        </form>
       
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(RegisterForm));
