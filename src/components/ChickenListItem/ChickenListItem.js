import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ChickenListItem extends Component {

  getChickenDetails = () => {
    // navigate to creature details page    
    this.props.history.push(`/chicken_details/${this.props.chicken.id}`);
  }

  render() {
    return (
      <div className="MyCoopBar"
      onClick={this.getChickenDetails}
      >
      <img className="ChickenListImg" src={this.props.chicken.chicken_image_url}/> 
      <h4 className="ChickenListItem">{this.props.chicken.name}</h4>
      <img className="ChickenListEggImg" src={this.props.chicken.chicken_egg_image_url}/>
                    
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(ChickenListItem));


