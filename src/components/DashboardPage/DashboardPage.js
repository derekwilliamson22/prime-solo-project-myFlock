import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateBar from '../DateBar/DateBar';
import LayingForm from '../LayingForm/LayingForm';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { format } from 'date-fns';


class DashboardPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
 
  // state = {
  //   dateBarDate: '',
  // }

  componentDidMount(){
    this.getChickens();
    this.createDailyData();
    this.getChickenLayingData();
  }

    getChickens = () => {
      this.props.dispatch({
        type: 'FETCH_CHICKENS'
      });
    }

    fetchCoop = () => {
      this.props.dispatch({
        type: "FETCH_COOP"
      });
    }

    createDailyData = () => {
      console.log('in create daily data');
      if(this.props.store.layingData.length === 0) {
          const chickens = this.props.store.chicken
          for(let chicken of chickens) {
            console.log('say hello', chicken.id);
            const newDailyData = {
              date: format(new Date(), 'MMMM - dd - yyyy'),
              chicken_id: chicken.id,
              didLay: 0
            }
            this.props.dispatch({
              type: "CREATE_DAILY_DATA",
              payload: newDailyData
            })
          }
        }
        else {
          this.getChickenLayingData();
          
        }
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

  // getChickenLayingData = () => {
  //   const newDate = format(this.props.store.date, 'MMMM - dd - yyyy');
  //   const layingData = {
  //     date: newDate,
  //     coop_id: this.props.store.coop.id
  //   }
  //   this.props.dispatch({
  //     type: 'FETCH_CHICKEN_LAYING_DATA',
  //     payload: layingData
  //   });
  // }


  getDateBarDate = (dateId) => {
    console.log('in getDashboardData with this:', dateId);
    this.setState({
      ...this.state,
      dateBarDate: dateId
    })
  } 

  render() { 
    return (
      <div className="Dashboard">
        <div className="DashboardDateContents">
          <DateBar getDateBarDate={this.getDateBarDate}/>
        </div>
        
        <LayingForm />
        {/* <FormGroup>
          <div className="LayingBar">
            <img id="DashboardListImg" className="DashboardListItem" src="images/goldstar_egg.png"/>
            <h4 className="DashboardListItem">Mabel</h4>
            <FormControlLabel
              label="Laid Today?"
              labelPlacement="start"
              value="true"
              control={<DashboardSwitch
                checked={this.state.checkedA}
                onChange={this.handleChange} 
                name="checkedA"
              />} */}
            
            {/* // <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            // <label htmlFor="didLayEgg">Egg?</label>
            />
          </div> */}
          {/* <div>
            <img id="DashboardListImg" className="DashboardListItem" src="images/california_white_egg.png"/>
            <h4 className="DashboardListItem">Pancake</h4>
            <FormControlLabel
            <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            <label htmlFor="didLayEgg">Egg?</label>
            />
          </div>
          <div>
            <img id="DashboardListImg" className="DashboardListItem" src="images/australorp_egg.png"/>
            <h4 className="DashboardListItem">Gertie</h4>
            <FormControlLabel
            <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            <label htmlFor="didLayEgg">Egg?</label>
            />
          </div>
          <div>
            <img id="DashboardListImg" className="DashboardListItem" src="images/barred_rock_egg.png"/>
            <h4 className="DashboardListItem">Norma</h4>
            <FormControlLabel
            <input className="DashboardListItem" type="checkbox" id="didLayEgg" name="didLayEgg" value="TRUE" />
            <label htmlFor="didLayEgg">Egg?</label>
            />
          </div>
          <div>
            <FormControlLabel
              <label className="CoopForm" htmlFor="didAddFeed">Did you add feed?</label>
              <input className="CoopForm" type="checkbox" id="didAddFeed" name="didAddFeed" value="TRUE" />
            />
            <FormControlLabel
              <label className="CoopForm" htmlFor="didAddWater">Did you add water?</label>
              <input className="CoopForm" type="checkbox" id="didAddWater" name="didAddWater" value="TRUE" />
            />
            <FormControlLabel
              <label className="CoopForm" htmlFor="didCleanCoop">Did you clean the coop?</label>
              <input className="CoopForm" type="checkbox" id="didCleanCoop" name="didCleanCoop" value="TRUE" />
            />
          </div> */}
         {/* </FormGroup> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(DashboardPage);
