import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateBar from '../DateBar/DateBar';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const DashboardSwitch = withStyles({
  switchBase: {
    color: red[400],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);



class DashboardPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
 
  state = {
    checkedA: false,
    dateBarDate: '',
  }

  getDateBarDate = (dataDate) => {
    console.log('in getDashboardData with this:', dataDate);
    this.setState({
      ...this.state,
      dateBarDate: dataDate
    })
  }

  handleChange = (event) => {
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.checked });
  };
 

  render() {
    console.log('what is this state', this.state.checkedA);
    console.log('what are my props', this.props.store);
    
    
    return (
      <div className="Dashboard">
        <div className="welcome">
          <h3>Welcome, {this.props.store.user.username}!</h3>
        </div>
        <div className="DateContents">
          <DateBar getDateBarDate={this.getDateBarDate}/>
        </div>
        <FormGroup>
          <div>
            <img id="DashboardListImg" className="DashboardListItem" src="images/goldstar.jpg"/>
            <h4 className="DashboardListItem">Mabel</h4>
            <FormControlLabel
              label="Egg Today?"
              labelPlacement="start"
              value="true"
              control={<DashboardSwitch
                checked={this.state.checkedA}
                onChange={this.handleChange} 
                name="checkedA"
              />}
            
            // <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            // <label htmlFor="didLayEgg">Egg?</label>
            />
          </div>
          {/* <div>
            <img id="DashboardListImg" className="DashboardListItem" src="images/california_white.png"/>
            <h4 className="DashboardListItem">Pancake</h4>
            <FormControlLabel
            <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            <label htmlFor="didLayEgg">Egg?</label>
            />
          </div>
          <div>
            <img id="DashboardListImg" className="DashboardListItem" src="images/black_australorp.jpg"/>
            <h4 className="DashboardListItem">Gertie</h4>
            <FormControlLabel
            <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            <label htmlFor="didLayEgg">Egg?</label>
            />
          </div>
          <div>
            <img id="DashboardListImg" className="DashboardListItem" src="images/barred_rock.jpg"/>
            <h4 className="DashboardListItem">Norma</h4>
            <FormControlLabel
            <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            <label htmlFor="didLayEgg">Egg?</label>
            />
          </div>
          <div>
            <FormControlLabel
              <label className="CoopForm" htmlFor="didAddFeed">Did you add feed?</label>
              <input className="CoopForm" type="checkbox" id="didAddFeed" name="didAddFeed" value="TRUE" />
            />
            <FormControlLabel
              <label className="CoopForm" htmlFor="didAddWater">Did you add water?</label>
              <input className="CoopForm" type="checkbox" id="didAddWater" name="didAddWater" value="TRUE" />
            />
            <FormControlLabel
              <label className="CoopForm" htmlFor="didCleanCoop">Did you clean the coop?</label>
              <input className="CoopForm" type="checkbox" id="didCleanCoop" name="didCleanCoop" value="TRUE" />
            />
          </div> */}
        </FormGroup>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(DashboardPage);
