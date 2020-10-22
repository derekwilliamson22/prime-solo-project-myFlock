import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LayingFormItem from '../LayingFormItem/LayingFormItem';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class LayingForm extends Component {
  

  render() {
    return (
      <div className="chickenBar">
        <ul className="bars">
          {this.props.store.chicken.map((item, index) => {
            return (
              <li 
              className="LayingFormItem"
              key={index}>
                <LayingFormItem
                  index={index}
                  chicken={item}
                  chickenName={item.name}
                  chickenEggImg={item.chicken_egg_image_url}
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

export default connect(mapStoreToProps)(LayingForm);
