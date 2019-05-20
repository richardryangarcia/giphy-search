import React from 'react';
import {connect} from 'react-redux';
import {GET_TRENDING} from './redux/trending/actions';
import {LOGOUT} from './redux/user/actions';
import MenuTop from './components/MenuTop';
import ModalContainer from './components/Modal';
import GifCard from './components/Card';

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
    const {trending} = this.props;
    const gifs = trending ? trending.gifs : null;
    const gif = gifs ? gifs[0] : null;
    return (
      <div className="App">
        <MenuTop />
        <header className="App-header">
          <p>
            Homepage
          </p>
        </header>
        <img src ="https://media.giphy.com/media/3ohzdUi5U8LBb4GD4s/200w_s.gif" />
        <img src ={encodeURI("https://media.giphy.com/media/3ohzdUi5U8LBb4GD4s/200w_s.gif")} />

        <GifCard source={gif ? `https://media.giphy.com/media/${gif.id}/200w_s.gif` : ''} />
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
