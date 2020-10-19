import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateBar from '../DateBar/DateBar';
import mapStoreToProps from '../../redux/mapStoreToProps';


class DashboardPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  render() {
    return (
      <div className="Dashboard">
        <h3 id="welcome">Welcome, {this.props.store.user.username}!</h3>
        <div>
        <DateBar />
        {/* <ChickenLayingList /> */}
        

        
        
        
        
        
        {/* <LogOutButton className="log-in" /> */}
        </div>
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
        <div>
          <div>
            <label className="CoopForm" for="didAddFeed">Did you add feed?</label>
            <input className="CoopForm" type="checkbox" id="didAddFeed" name="didAddFeed" value="TRUE" />
          </div>
          <div>
            <label className="CoopForm" for="didAddWater">Did you add water?</label>
            <input className="CoopForm" type="checkbox" id="didAddWater" name="didAddWater" value="TRUE" />
          </div>
          <div>
            <label className="CoopForm" for="didCleanCoop">Did you clean the coop?</label>
            <input className="CoopForm" type="checkbox" id="didCleanCoop" name="didCleanCoop" value="TRUE" />
          </div>
        </div>

      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(DashboardPage);
