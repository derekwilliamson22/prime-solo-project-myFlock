import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

//import AboutPage from '../AboutPage/AboutPage';

import InfoPage from '../InfoPage/InfoPage';
//import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import ServiceConfirmationPage from '../ServiceConfirmationPage/ServiceConfirmationPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import MyCoopPage from '../MyCoopPage/MyCoopPage';
import MyStatsPage from '../MyStatsPage/MyStatsPage';
import ServicePage from '../ServicePage/ServicePage';
import CreateChicken from '../CreateChicken/CreateChicken';
import ChickenDetails from '../ChickenDetails/ChickenDetails';
import EditChickenDetails from '../EditChickenDetails/EditChickenDetails';
import ServiceRequestsPage from '../ServiceRequestsPage/ServiceRequestsPage';
import RegisteredUsersPage from '../RegisteredUsersPage/RegisteredUsersPage';
import { format } from 'date-fns';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
   }

  createDailyData = () => {
    console.log('in create daily data');
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
    // this.getChickenLayingData();
  }

  render() {
    console.log('do we see the app js');
    
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/login" />
            {/* Visiting localhost:3000/about will show the about page. */}
            {/* <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            /> */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/dashboard"
              component={DashboardPage}
            />
            <ProtectedRoute
              exact
              path="/mycoop"
              component={MyCoopPage}
            />
            <ProtectedRoute
              exact
              path="/chicken_form"
              component={CreateChicken}
            />
            <ProtectedRoute
              exact
              path="/chicken_details/:id"
              component={ChickenDetails}
            />
             <ProtectedRoute
              exact
              path="/chicken_edit/:id"
              component={EditChickenDetails}
            />
            <ProtectedRoute
              exact
              path="/mystats"
              component={MyStatsPage}
            />
            <ProtectedRoute
              exact
              path="/service"
              component={ServicePage}
            />
            <ProtectedRoute
              exact
              path="/service_requests"
              component={ServiceRequestsPage}
            />
            <ProtectedRoute
              exact
              path="/registered_users"
              component={RegisteredUsersPage}
            />
            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/mycoop"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/mycoop"
            />
            {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage}
              authRedirect="/dashboard"
            /> */}
            <Route
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/confirmation"
              component={ConfirmationPage}
              
            />
            <Route
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/serviceConfirmation"
              component={ServiceConfirmationPage}
              
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
