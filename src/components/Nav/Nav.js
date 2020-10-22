import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/dashboard';
    loginLinkData.text = 'Home';
  }

  let title = {
    text: 'myFlock'
  }

  if (props.store.user.id != null) {
    title.text = props.store.coop.name;
  }


  return (
    <div className="nav">
      <div>
        <img className="NavHeaderIcon" src="images/chicken_icon.png"/>
      </div>
      <div className="NavTitle">
          <h2 className="nav-title">{title.text}</h2>
      </div>
      {props.store.user.id === undefined ?
        <div className="BlankHeader"></div> : 
        <div className="dropdown">
          <img className="dropbtn" src="images/nav_icon_menu.png"/>
          <div className="dropdown-content">
            <a href="#">EDIT USER</a>
            <a href="#">EDIT COOP</a>
            <a
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    className={props.className}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}>
    Log Out
  </a>
          </div>
        </div>
      }
      {/* <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not
          {loginLinkData.text}
        </Link>
        Show the link to the info page and the logout button if the user is logged in
        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
        Always show this link since the about page is not protected
         <Link className="nav-link" to="/about">
          About
        </Link>
      </div> */}
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
