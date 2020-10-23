import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LayingFormSwitch from '../LayingFormSwitch/LayingFormSwitch';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class LayingForm extends Component {
  

  render() {
    return (
      <div className="chickenBar">
        <ul className="bars">
        {this.props.store.layingData.map((item, index) => {
          return (
          <li
          className="LayingFormItem"
          key={index}>
          <LayingFormSwitch
          chickenId={item.id}
          chickenName={item.name}
          chickenEggImg={item.chicken_egg_image_url}
          chickenDidLay={item.didLay}
          />
          </li> 
          );
        })}
        </ul>
       </div>
    )
        {/* {this.props.store.layingData === [] ?
          this.props.store.layingData.map((item, index) => ( 
           
            <LayingFormSwitch
            chickenId={item.id}
            chickenName={item.name}
            chickenEggImg={item.chicken_egg_image_url}
            chickenDidLay={item.didLay}
            /> 
            
          )) :
          <h3>No Data</h3>       
        }
        

        </div> */}
    
  }
}

export default connect(mapStoreToProps)(LayingForm);
