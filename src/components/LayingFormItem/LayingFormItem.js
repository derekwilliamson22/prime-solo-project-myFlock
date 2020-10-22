import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new


// component.
class LayingFormItem extends Component {


  render() {
     
      return (

            <div className="LayingBar">
              <img className="ChickenListEggImg" src={this.props.chickenEggImg}/>
              <h4 className="ChickenListItem">{this.props.chickenName}</h4>
            </div>
              

      );
  }
}

export default connect(mapStoreToProps)(LayingFormItem);
