import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ChickenDetails extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_CHICKEN_DETAILS',
      payload: parseInt(this.props.match.params.id),
    });
  }
  

  render() {
    console.log('what are the chicken details', this.props.store.chickenDetails);
    
    return (
      <div>
         {/* <div>
              {this.porops.store.chickenchickenDetails.img_path &&
                <img
                  src={`images/${creatureDetails.img_path}`}
                  alt={creatureDetails}
                />
              }
            </div>
 */}




       
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ChickenDetails);
