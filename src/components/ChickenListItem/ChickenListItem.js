import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ChickenListItem extends Component {

  handleClickDetails = () => {
    // navigate to creature details page
    this.props.history.push(`/chicken_details/${this.props.chicken.id}`);
  }

  render() {
    const {
      chicken,
    } = this.props;

    return (
      <div className="bar"
      onClick={this.handleClickDetails}
      >
      <img src={chicken.imageUrl}/> 
      <h4>{chicken.name}</h4>
                    
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(ChickenListItem));


