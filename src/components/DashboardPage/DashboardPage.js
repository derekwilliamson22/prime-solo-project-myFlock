import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class DashboardPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  // componentDidMount(){
  //   this.fetchCoop();
  // }

  // fetchCoop = () => {
    
  //   const userId = this.props.store.user.id
  //   this.props.dispatch({
  //     type: 'FETCH_COOP',
  //     payload: userId
  //   })
  // }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <div>
          {/* {this.props.store.coop.map((coop, i) =>
          <p>Your coop name is: {coop.name}</p>
          )} */}
        </div>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(DashboardPage);
