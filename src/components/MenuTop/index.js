import React from 'react';
import {connect} from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Logo from './logo.svg';
import {OPEN_MODAL} from '../../redux/application/actions';
import {LOGOUT} from '../../redux/user/actions';
import {OPEN_SEARCH} from '../../redux/search/actions';

class MenuBar extends React.Component {
  openLoginModal = (e) => {
    const {dispatch} = this.props;
    e.preventDefault();
    dispatch({
      type: OPEN_MODAL,
      payload: {
        modalType: 'login'
      }
    });
  }

  openRegisterModal = (e) => {
    const {dispatch} = this.props;
    e.preventDefault();
    dispatch({
      type: OPEN_MODAL,
      payload: {
        modalType: 'register'
      }
    });
  }

  openSearch = (e) => {
    const {dispatch} = this.props;
    e.preventDefault();
    dispatch({
      type: OPEN_SEARCH
    });
  }

  userLogout = (e) => {
    const {dispatch} = this.props;
    e.preventDefault();
    dispatch({
      type: LOGOUT
    });
  }

  authNavLinks = () => {
    const {user} = this.props;
    if (user.authorized){
      return [
        <Nav.Link key='favorites' href="#/favorites">Favorites</Nav.Link>,
        <Nav.Link key='logout' href="#" onClick={this.userLogout}>Logout</Nav.Link>
      ]
    } else {
      return [
          <Nav.Link key='login' href="#" onClick={this.openLoginModal}>Login</Nav.Link>,
          <Nav.Link key='register' href="#" onClick={this.openRegisterModal}>Register</Nav.Link>
        ]
    }
  }

  render() {
    const {user} = this.props;
    return (
      <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#/trending">
            <img
              alt="project logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          {' Giphy Search'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
           <Nav.Link key='search' href="#" onClick={this.openSearch}>Search</Nav.Link>
           {this.authNavLinks().map(link => {
              return link
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(MenuBar);
