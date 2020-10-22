import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      type: 'FETCH_CHICKENS'
    });
  }

  goToDashboard = () => {
    this.props.history.push('/dashboard');
  }
  goToMyCoop = () => {
    this.props.history.push('/mycoop');
  }
  goToMyStats = () => {
    this.props.history.push('/mystats');
  }
  goToService = () => {
    this.props.history.push('/service');
  }

  render() {
    return (
        <footer>
          <nav>
            {this.props.store.user.id === undefined ?
            '' : 
            <div>
              <img className="NavIcons" src="images/nav_icon_dashboard.png" onClick={this.goToDashboard}/>
              <img className="NavIcons" src="images/nav_icon_mycoop.png" onClick={this.goToMyCoop}/>
              <img className="NavIcons" src="images/nav_icon_mystats.png" onClick={this.goToMyStats}/>
              <img className="NavIcons" src="images/nav_icon_service.png" onClick={this.goToService}/>
            </div>
            }
          </nav>
        </footer>
    )
  };
}

export default connect(mapStoreToProps)(withRouter(Footer));
