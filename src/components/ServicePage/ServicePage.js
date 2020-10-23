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
    newServiceRequest: {
      date: format(new Date(), 'MMMM - dd - yyyy'),
      user_id: this.props.store.user.id,
      requestForFeed: '',
      requestForCleaning: '',
      otherNotes: '',
    }
  };

  sendServiceRequest = () => {
    
  }

  render() {
    console.log('what are my service props', this.props);
    
    return (
      <div className="Dashboard">
        <h2>Service Coming Soon...</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ServicePage);
