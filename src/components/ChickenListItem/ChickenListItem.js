import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ChickenListItem extends Component {

  getChickenDetails = () => {
    // navigate to creature details page
    console.log('in get chicken details');
    
    this.props.history.push(`/chicken_details/${this.props.chicken.id}`);
  }

  render() {
    return (
      <div className="bar"
      onClick={this.getChickenDetails}
      >
      <img className="ChickenListItem" src={this.props.chicken.image_url}/> 
      <h4 className="ChickenListItem">{this.props.chicken.name}</h4>
                    
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(ChickenListItem));


