import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateBar from '../DateBar/DateBar';
import mapStoreToProps from '../../redux/mapStoreToProps';


class DashboardPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  render() {
    return (
      <div className="Dashboard">
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <p>Your Coop Name is: {this.props.store.coop.name}</p>
        <p>Your Coop Id is: {this.props.store.coop.id}</p>
        <DateBar />
        {/* <ChickenLayingList /> */}
        

        
        
        
        
        
        {/* <LogOutButton className="log-in" /> */}

        <div>
          <img id="DashboardListImg" className="DashboardListItem" src="images/goldstar.jpg"/>
          <h4 className="DashboardListItem">Mabel</h4>
          <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
          <label for="didLayEgg">Egg?</label>
        </div>
        <div>
          <img id="DashboardListImg" className="DashboardListItem" src="images/california_white.png"/>
          <h4 className="DashboardListItem">Pancake</h4>
          <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
          <label for="didLayEgg">Egg?</label>
        </div>
        <div>
          <img id="DashboardListImg" className="DashboardListItem" src="images/black_australorp.jpg"/>
          <h4 className="DashboardListItem">Gertie</h4>
          <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
          <label for="didLayEgg">Egg?</label>
        </div>
        <div>
          <img id="DashboardListImg" className="DashboardListItem" src="images/barred_rock.jpg"/>
          <h4 className="DashboardListItem">Norma</h4>
          <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
          <label for="didLayEgg">Egg?</label>
        </div>
        <div className="CoopForm">
          <label for="didAddFeed">Did you add feed?</label>
          <input type="checkbox" id="didAddFeed" name="didAddFeed" value="TRUE" />
          <label for="didAddWater">Did you add water?</label>
          <input type="checkbox" id="didAddWater" name="didAddWater" value="TRUE" />
          <label for="didCleanCoop">Did you clean the coop?</label>
          <input type="checkbox" id="didCleanCoop" name="didCleanCoop" value="TRUE" />
        </div>

      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(DashboardPage);
