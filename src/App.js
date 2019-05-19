import React from 'react';
import {connect} from 'react-redux';
import {GET_TRENDING} from './redux/trending/actions';
import {LOGOUT} from './redux/user/actions';
import MenuTop from './components/MenuTop';
import ModalContainer from './components/Modal';

class App extends React.Component {

  handleLogout = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch({type:LOGOUT});
  }

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch({type:GET_TRENDING});
  }
  render() {
    return (
      <div className="App">
        <MenuTop />
        <header className="App-header">
          <p>
            Homepage
          </p>
        </header>
        <ModalContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trending: state.trending
  }
}

export default connect(mapStateToProps, null)(App);
