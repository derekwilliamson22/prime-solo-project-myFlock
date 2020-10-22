import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LayingFormItem from '../LayingFormItem/LayingFormItem';
import LayingFormSwitch from '../LayingFormSwitch/LayingFormSwitch';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class LayingForm extends Component {
  

  render() {
    const chickenData = this.props.store.chicken
    const layingData = this.props.store.layingData
    const chickenAndLayingData = chickenData.concat(layingData);
    console.log('what is the new array', chickenAndLayingData);
    

    return (
      <div className="chickenBar">
        <div className="bars">
          <ul>
          {this.props.store.chicken.map((item, index) => {
            return (
            <li className="LayingFormItem"
              key={item.id}>
                <LayingFormItem
                  index={item.id}
                  chicken={item}
                  chickenName={item.name}
                  chickenEggImg={item.chicken_egg_image_url}
                  didLay
                  {...this.props}
                
                />                
            </li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LayingForm);
