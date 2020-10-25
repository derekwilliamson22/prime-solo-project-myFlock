import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegisteredUserItem from '../RegisteredUserItem/RegisteredUserItem';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class RegisteredUsersPage extends Component {
  componentDidMount(){
    this.props.dispatch({
      type: "FETCH_REGISTERED_USERS"
    })
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="Details">
          <h3 className="UserContents">myFlock Users</h3>
          <button 
            className="AdminBtn" 
            onClick={() => this.props.history.push('/mycoop')}
            >
            Return to Admin Menu
          </button>
          <div className="MyCoopList">            
            <ul className="bars">
              {this.props.store.userList.map((user, index) => {
                return (
                <li key={index}>
                  <RegisteredUserItem 
                  index={index}
                  user={user}
                  />
                </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisteredUsersPage);
