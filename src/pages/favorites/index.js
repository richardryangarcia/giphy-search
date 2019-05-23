import React from 'react';
import {connect} from 'react-redux';
import CardGrid from 'components/CardGrid';

class Favorites extends React.Component{
  render() {
    const {favorites} = this.props;
    const gifs = favorites && favorites.gifs ? favorites.gifs : [];
    return (
      <div style={{'marginTop':'30px'}}>
        <CardGrid gifs={gifs} headline={'Favorites'} subHeadline={'Gifs youve enjoyed'} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}
export default connect(mapStateToProps, null)(Favorites);
