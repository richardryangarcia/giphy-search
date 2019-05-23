import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {getTrending} from 'redux/trending/actions';
import {logout} from 'redux/user/actions';
import CardGrid from 'components/CardGrid';

class Trending extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    const {actions} = this.props;
    actions.logout();
  }

  componentDidMount(){
    const {actions} = this.props;
    actions.getTrending();
  }
  render() {
    const {trending} = this.props;
    const gifs = trending ? trending.gifs : [];
    return (
      <div style={{'marginTop':'30px'}}>
        <CardGrid gifs={gifs} headline={'Trending'} subHeadline={'Find out whats trending in the gif universe'} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { trending: state.trending }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ getTrending, logout}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
