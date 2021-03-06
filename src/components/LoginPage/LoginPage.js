import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />

        <center>
          <button
            type="button"
            className="btn_asLink"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            New User?
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
