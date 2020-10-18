import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { format, addDays, subDays } from 'date-fns';

const date = format(new Date(), 'MMMM - dd - yyyy');

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
      registration_date: date
    }
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: this.state.newUser
    });
    this.props.history.push('/confirmation')
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
          <h2>myFlock Registration</h2>
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
          <div>
            
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={this.state.newUser.address}
                required
                onChange={this.handleInputChangeFor('address')}
              />
            
          </div>
          <div>
            
              <input
                type="text"
                name="zipcode"
                placeholder="Zipcode"
                value={this.state.newUser.zipcode}
                required
                onChange={this.handleInputChangeFor('zipcode')}
              />
            
          </div>
          <div>
            
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.newUser.email}
                required
                onChange={this.handleInputChangeFor('email')}
              />
            
          </div>
          <div>
            
              <input
                type="text"
                name="phone"
                placeholder="(XXX)XXX-XXXX"
                value={this.state.newUser.phone}
                required
                onChange={this.handleInputChangeFor('phone')}
              />
            
          </div>
          <div className="Register-btn">
            
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
          </div>
          
        </form>
       
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(RegisterForm));
