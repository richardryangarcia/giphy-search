import React from 'react';
import {connect} from 'react-redux';
import {GET_TRENDING} from './redux/trending/actions';
import {LOGOUT} from './redux/user/actions';
import MenuTop from './components/MenuTop';
import ModalContainer from './components/Modal';
import GifCard from './components/Card';
var GifPlayer = require('react-gif-player');

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
    const gif_id = gifs && gifs[0] && gifs[0].id;
    const still_url = trending && trending.gifs && trending.gifs[0] && trending.gifs[0].images && trending.gifs[0].images.original_still && trending.gifs[0].images.original_still.url
    // console.log(gif.images.original_still.url)
    return (
      <div className="App">
        <MenuTop />
        <header className="App-header">
          <p>
            Homepage
          </p>
        </header>
        <GifCard still={still_url} gif={`https://media.giphy.com/media/${gif_id}/giphy.gif`} />
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
