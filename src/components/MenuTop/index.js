import React from 'react';
import {connect} from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Logo from './logo.svg';
import {OPEN_MODAL} from '../../redux/application/actions';

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

  authNavLinks = () => {
    const {user} = this.props;
    if (user.authorized){
      return [
        <Nav.Link href="#">Favorites</Nav.Link>,
        <Nav.Link href="#">Logout</Nav.Link>
      ]
    } else {
      return [
          <Nav.Link href="#" onClick={this.openLoginModal}>Login</Nav.Link>,
          <Nav.Link href="#" onClick={this.openRegisterModal}>Register</Nav.Link>
        ]
    }
  }

  render() {
    const {user} = this.props;
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <img
            alt="project logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Giphy Search'}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link href="#">Search</Nav.Link>
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
