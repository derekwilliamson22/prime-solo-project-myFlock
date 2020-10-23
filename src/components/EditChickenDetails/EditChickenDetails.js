import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EditChickenDetails extends Component {
  state = {
    updatedChicken: {
      chicken_name: this.props.store.chickenDetails.name,
      breed: this.props.store.chickenDetails.breed,
      birthday: this.props.store.chickenDetails.birthday,
      notes: this.props.store.chickenDetails.notes,
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_CHICKEN_DETAILS',
      payload: parseInt(this.props.match.params.id),
    });
  }

  returnToChickenDetails = () => {
    this.props.history.push(`/chicken_details/${this.props.match.params.id}`);
  }

  updateChicken = (event) => {
      
    event.preventDefault();
    this.props.dispatch({
      type: 'UPDATE_CHICKEN_DETAILS',
      url: `api/chicken/details/${this.props.match.params.id}`,
      payload: this.state.updatedChicken
    })
    this.returnToChickenDetails()
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      updatedChicken:{
        ...this.state.updatedChicken,
      [propertyName]: event.target.value,
      }
    });
  };

//   render() {
//     return (
//       <div className="EditDetails">
//         <div className="DetailsImg">
//           <img
//             src={`${this.props.store.chickenDetails.image_url}`}
//             alt={this.props.store.chickenDetails}
//           />
//         </div>
//         <div>
//           <h5>Name: 
//             <input
//             type="text"
//             name="chicken_name"
//             placeholder={this.props.store.chickenDetails.name}
//             //value={this.state.updatedChickenDetails.chicken_name}
//             onChange={this.handleInputChangeFor('chicken_name')}
//           />
//           </h5>
//         </div>
//         <div>  
//           <h5>Breed:
//             <input
//               type="text"
//               name="breed"
//               placeholder={this.props.store.chickenDetails.breed}
//               value={this.state.updatedChickenDetails.breed}
//               onChange={this.handleInputChangeFor('breed')}
//             />         
//           </h5>
//         </div>  
//         <div>
//           <h5>Birthday:
//             <input
//               type="date"
//               name="birthday"
//               placeholder={this.props.store.chickenDetails.birthday}
//               value={this.state.updatedChickenDetails.birthday}               
//               onChange={this.handleInputChangeFor('birthday')}
//             />
//           </h5>
//         </div>
//         <div>
//           <h5>Notes:</h5>
//             <textarea
//               type="textarea"
//               name="notes"
//               placeholder={this.props.store.chickenDetails.notes}
//               value={this.state.updatedChickenDetails.notes}
//               onChange={this.handleInputChangeFor('notes')}
//             />
//         </div>
//         <div className="EditDetailsButtons">
//           <button onClick={this.returnToChickenDetails}>Cancel Update</button>
//           <button onClick={this.updateChicken}>Update Details</button>
//         </div>
//       </div>
//     );
//   }
// }

render() {
  console.log('the chicken details props', this.props.store.chickenDetails);
  
  return (
    <div className="Dashboard">
      <div className="Details">
        <img
          className="DetailsImg"
          src={`${this.props.store.chickenDetails.chicken_image_url}`}
          alt={this.props.store.chickenDetails}
        />
        <img
          className="DetailsImg"
          src={`${this.props.store.chickenDetails.chicken_egg_image_url}`}
          alt={this.props.store.chickenDetails}
        />
        <div className="DetailsInfo">
          <h5>Name: 
            <input
            type="text"
            name="chicken_name"
            //placeholder="Chicken Name"
            value={this.state.updatedChicken.chicken_name}
            onChange={this.handleInputChangeFor('chicken_name')}
          />
          </h5>
        
        
          <h5>Breed:
            <input
              type="text"
              name="breed"
              //placeholder="Breed"
              value={this.state.updatedChicken.breed}
              onChange={this.handleInputChangeFor('breed')}
            />         
          </h5>
         
      
          <h5>Birthday:
            <input
              type="date"
              name="birthday"
              //placeholder="Birthday"
              value={this.state.updatedChicken.birthday}               
              onChange={this.handleInputChangeFor('birthday')}
            />
          </h5>
        </div>
        <div className="DetailsNotes">
          <h5>Notes:</h5>
            <textarea
              type="textarea"
              name="notes"
              //placeholder="Notes"
              value={this.state.updatedChicken.notes}
              onChange={this.handleInputChangeFor('notes')}
            />
        </div>
        <div className="EditDetailsButtons">
          <button className="btn btn_sizeSm" onClick={this.returnToChickenDetails}>Cancel Update</button>
          <button className="btn btn_sizeSm" onClick={this.updateChicken}>Update Details</button>
        </div>
        {/* <input className="btn" type="submit" name="submit" value="Submit" />
        </form> */}
        </div>
    </div>
  );
}
}

export default connect(mapStoreToProps)(withRouter(EditChickenDetails));
