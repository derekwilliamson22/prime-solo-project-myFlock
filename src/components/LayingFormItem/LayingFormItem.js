import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { format } from 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { actionChannel } from 'redux-saga/effects';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
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


// component.
class LayingFormItem extends Component {

   state = {
     checked: false,
   }

  dailyEgg = () => {
    if(this.state.checked === false) {
      console.log('delete an egg');
    }
    if(this.state.checked === true) {
      console.log('add an egg');
    }
  }



  handleChange = (event) => {
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.checked });
    this.dailyEgg();
  };

  render() {
    const newDate = format(this.props.store.date, 'MMMM - dd - yyyy');
    return (
      <div>
      <FormGroup>
          <div className="LayingBar">
          <img className="ChickenListEggImg" src={this.props.chickenEggImg}/>
          <h4 className="ChickenListItem">{this.props.chickenName}</h4>
          <FormControlLabel
              label="Laid Today?"
              labelPlacement="start"
              value="true"
              control={<DashboardSwitch
                checked={this.state.checked}
                onChange={this.handleChange} 
                name="checked"
              />}
            
            // <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            // <label htmlFor="didLayEgg">Egg?</label>
            />
          </div>
       </FormGroup>   
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LayingFormItem);
