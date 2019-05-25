import React from 'react';
import {connect} from 'react-redux';
import CardGrid from 'components/CardGrid';
import {Redirect} from 'react-router-dom';


class Favorites extends React.Component{
  render() {
    const {favorites, user} = this.props;
    const gifs = favorites && favorites.gifs ? favorites.gifs : [];
    if (user.authorized) {
      return (
        <div style={{'marginTop':'30px'}}>
          <CardGrid gifs={gifs} headline={'Favorites'} subHeadline={'Gifs youve enjoyed'} />
        </div>
      );
    } else {
      return <Redirect to="/trending" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    user: state.user
  }
}
export default connect(mapStateToProps, null)(Favorites);
