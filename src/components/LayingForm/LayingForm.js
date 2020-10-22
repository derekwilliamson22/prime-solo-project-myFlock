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
    return (
      <div className="chickenBar">
        {this.props.store.chicken.map((item, index) => (
          <div key={index}>
            <LayingFormItem
              chickenName={item.name}
              chickenEggImg={item.chicken_egg_image_url}
            />
              <div>
                {this.props.store.layingData.map((item, index) => ( 
                  <LayingFormSwitch
                  chickenId={item.id}
                  chickenDidLay={item.didLay}
                  />
                ))}
              </div>
          </div>
        ))}
          {/* {this.props.store.chicken.map((item, index) => {
            return (
            <li className="LayingFormItem"
              key={index}>
                <LayingFormItem
                  index={index}
                  chicken={item}
                  chickenName={item.name}
                  chickenEggImg={item.chicken_egg_image_url}
                  didLay
                  {...this.props}
                
                />                
            </li>
            )
          })} */}
        </div>
    );
  }
}

export default connect(mapStoreToProps)(LayingForm);
