import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { format } from 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
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


class ServicePage extends Component {
  state = {
    serviceRequest: {
      date: format(new Date(), 'MMMM - dd - yyyy'),
      user_id: this.props.store.user.id,
      requestForFeed: false,
      requestForCleaning: false,
      otherNotes: ''
    }
  }
  
 

  serviceConfirmation = () => {
    this.props.history.push(`/serviceConfirmation`);
  }

  sendServiceRequest = (event) => {
      
    event.preventDefault();
    this.props.dispatch({
      type: 'SEND_SERVICE_REQUEST',
      url: `api/coop/service`,
      payload: this.state.serviceRequest
    })
    this.serviceConfirmation()
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    
    
    this.setState({
      serviceRequest:{
        ...this.state.serviceRequest,
      [propertyName]: event.target.value,
      }
    });
  };

  handleChange = (event) => {
    this.setState({ 
      serviceRequest: {
      ...this.state.serviceRequest,
      [event.target.name]: event.target.checked
      }
    });
    console.log('what is state for switch', this.state.serviceRequest.requestForFeed);
    
    }


render() {
  
  
  return (
    <div className="Dashboard">
      <div className="Details">
      <FormGroup>
        <h3 className="ServiceContents">Service Request Form</h3>
        <div className="ServiceBar">
          <div className="eggSwitch">                             
          <FormControlLabel
            label="Request Feed Delivery?"
            labelPlacement="start"
            value="true"
            control={<DashboardSwitch
              checked={this.state.requestForFeed}
              onChange={this.handleChange} 
              name="requestForFeed"
              />}
            />
          </div>       
        </div> 
        <div className="ServiceBar">
          <div className="eggSwitch">                             
          <FormControlLabel
            label="Request Coop Cleaning?"
            labelPlacement="start"
            value="true"
            control={<DashboardSwitch
              checked={this.state.requestForCleaning}
              onChange={this.handleChange} 
              name="requestForCleaning"
              />}
            />
          </div>       
        </div>    
      </FormGroup>

        <div className="DetailsNotes">
          <h5>Other Notes:</h5>
            <textarea
              type="textarea"
              name="otherNotes"
              //placeholder="Notes"
              value={this.state.serviceRequest.otherNotes}
              onChange={this.handleInputChangeFor('otherNotes')}
            />
        </div>
        <div className="EditDetailsButtons">
          <button 
            className="btn btn_sizeSm" 
            onClick={this.sendServiceRequest}
            >
            Send Request!
          </button>
        </div>
        {/* <input className="btn" type="submit" name="submit" value="Submit" />
        </form> */}
        </div>
    </div>
  );
}
}

export default connect(mapStoreToProps)(ServicePage);
