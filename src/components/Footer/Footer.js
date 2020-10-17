import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Footer extends Component {

  fetchChickens = () => {
    this.props.dispatch({
      type: 'FETCH_CHICKENS',
      url: `api/chicken/${this.props.store.coop.id}`
    });
  }


  render() {
    return (
        <footer>
          <nav>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link onClick={()=>this.fetchChickens(`${this.props.store.coop.id}`)} to="/mycoop">myCoop</Link></li>
              <li><Link to="/mystats">myStats</Link></li>
              <li><Link to="/service">Service Request</Link></li>
            </ul>
          </nav>
        </footer>
    )
  };
}

export default connect(mapStoreToProps)(Footer);
