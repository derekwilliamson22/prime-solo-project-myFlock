import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ServiceRequestItem from '../ServiceRequestItem/ServiceRequestItem';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ServiceRequestsPage extends Component {

  componentDidMount(){
    this.props.dispatch({
      type: "FETCH_SERVICE_REQUESTS"
    })
  }


  render() {
    return (
      <div className="Dashboard">
        <div className="Details">
          <h3 className="UserContents">Service Requests</h3>
          <button 
            className="AdminBtn" 
            onClick={() => this.props.history.push('/mycoop')}
            >
            Return to Admin Menu
          </button>
          <div className="MyCoopList">            
            <ul className="bars">
              {this.props.store.serviceRequests.map((request, index) => {
                return (
                <li key={index}>
                  <ServiceRequestItem 
                  index={index}
                  request={request}
                  />
                </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ServiceRequestsPage);
