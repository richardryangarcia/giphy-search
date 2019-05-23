import React from 'react';
import {connect} from 'react-redux';
import {GET_TRENDING} from '/redux/trending/actions';
import {LOGOUT} from '/redux/user/actions';
import MenuTop from '/components/MenuTop';
import ModalContainer from '/components/Modal';
import CardGrid from '/components/CardGrid';
import SearchOverlay from '/components/SearchOverlay';

class SearchResults extends React.Component {
  render() {
    const {search} = this.props;
    const gifs = search ? search.gifs : [];
    const keyword = search ? search.keyword : '';
    return (
      <div className="App" style={{'marginTop':'30px'}}>
        <MenuTop />
        <CardGrid gifs={gifs} headline={'Search Results'} subHeadline={`Keyword: ${keyword}`} />
        <SearchOverlay/>
        <ModalContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps, null)(SearchResults);
