import React from 'react';
import {connect} from 'react-redux';
import {GET_TRENDING} from './redux/trending/actions';
import {LOGOUT} from './redux/user/actions';
import MenuTop from './components/MenuTop';
import ModalContainer from './components/Modal';
import CardGrid from './components/CardGrid';

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
    const gifs = trending ? trending.gifs : [];
    return (
      <div className="App" style={{'marginTop':'16px'}}>
        <MenuTop />
        <header className="App-header">
          <p>
            Homepage
          </p>
        </header>
        <CardGrid gifs={gifs} headline={'Trending'} subHeadline={'Find out whats trending in the gif universe'} />
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
