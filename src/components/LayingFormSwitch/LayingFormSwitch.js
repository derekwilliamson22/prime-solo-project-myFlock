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
class LayingFormSwitch extends Component {

  state = {
    checkedA: false,
    checkedB: true
  }
  
  getChickenLayingData = () => {
    const newDate = format(this.props.store.date, 'MMMM - dd - yyyy');
    const layingData = {
      date: newDate,
      coop_id: this.props.store.coop.id
    }
    this.props.dispatch({
      type: 'FETCH_CHICKEN_LAYING_DATA',
      payload: layingData
    });
  }

  dailyEgg = () => {
    const newDate = format(this.props.store.date, 'MMMM - dd - yyyy');
    const addEgg = {
      date: newDate,
      didLay: 1,
      chicken_id: this.props.chickenId
    }
    const deleteEgg = {
      date: newDate,
      chicken_id: this.props.chickenId
    }
   
    if(!this.state.checkedA && this.state.checkedB) {
      console.log('bang a '); // add egg
      this.props.dispatch({
        type: "ADD_EGG",
        payload: addEgg
      })
      this.setState({
        ...this.state,
        checkedA: false,
        checkedB: true
      })
    }
    else if(this.state.checkedA && this.state.checkedB) {
      console.log('bang b ');      
      // this.props.dispatch({
      //   type: "DELETE_EGG",
      //   payload: deleteEgg
      // })
    }
   this.getChickenLayingData();
  }

  handleChange = (event) => {
    console.log('what is the value of switch', event.target.checked);
    
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.checked 
    });
    console.log('what is the value of checkedA', this.state.checkedA);
    console.log('what is the value of checkedB', this.state.checkedB);
    
    
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
                  <div className="eggSwitch">
                  {this.props.didLay ? // this works to show eggs when checkedB is true and checkedA is false
                    <FormControlLabel
                    label="Laid Today?"
                    labelPlacement="start"
                    value="true"
                    control={<DashboardSwitch
                      checked={this.state.checkedB}
                      onChange={this.handleChange} 
                      name="checkedB"
                      />}
                    /> :
                    <FormControlLabel
                    label="Laid Today?"
                    labelPlacement="start"
                    value="true"
                    control={<DashboardSwitch
                      checked={this.state.checkedA}
                      onChange={this.handleChange} 
                      name="checkedA"
                      />}
                    />
                  }
                 </div>
                </div>   
              </FormGroup>
            </div>
    )}             
} 

// the following works in conjunction with no-state to render buttons on load
{/* <FormControlLabel
label="Laid Today?"
labelPlacement="start"
value="true"
control={<DashboardSwitch
  checked={this.props.didLay}
  onChange={this.handleChange} 
  name="checkedA"
  />}
/> */}

export default connect(mapStoreToProps)(LayingFormSwitch);
