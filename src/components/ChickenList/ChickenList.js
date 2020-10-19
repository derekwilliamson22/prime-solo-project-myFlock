import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ChickenListItem from '../ChickenListItem/ChickenListItem';

class ChickenList extends Component {
  

  render() {
    return (
      <div className="chickenBar">
        <ul className="bars">
          {this.props.store.chicken.map((item, index) => {
            return (
              <li 
              className="ChickenListItem"
              key={index}>
                <ChickenListItem
                  index={index}
                  chicken={item}
                  {...this.props}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ChickenList);
