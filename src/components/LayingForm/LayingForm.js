import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LayingFormSwitch from '../LayingFormSwitch/LayingFormSwitch';
import { format } from 'date-fns';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.



class LayingForm extends Component {

  componentDidMount(){
  //this.getChickenLayingData();
  }

  getChickenLayingData = () => {
    const newDate = format(this.props.store.date, 'MMMM - dd - yyyy');
    const layingData = {
      date: newDate,
      coop_id: this.props.store.coop.id
    }
    this.props.dispatch({
      type: 'FETCH_CHICKEN_LAYING_DATA',
      payload: layingData
    });
  }

  didChickenLayEgg = (chicken) => {
      console.log('what are chicken', chicken);
      
    for (let layingData of this.props.store.layingData) {
      if (
        layingData.id === chicken.chickenid &&
        layingData.date === format(this.props.store.date, 'MMMM - dd - yyyy') &&
        layingData.didLay === 1
      ) {
        return true;
      }
    }
    return false;
  }

  

  render() {
    return (
      <div className="chickenBar">
        <ul className="bars">
        {this.props.store.chicken.map((chicken, index) => {
          return (
          <li
          className="LayingFormItem"
          key={index}>
          <LayingFormSwitch
          chickenId={chicken.id}
          chickenName={chicken.name}
          chickenEggImg={chicken.chicken_egg_image_url}
          didLay={this.didChickenLayEgg(chicken)}
          />
          </li> 
          )
        })}
        </ul>
       </div>
    )
  }
}

export default connect(mapStoreToProps)(LayingForm);
