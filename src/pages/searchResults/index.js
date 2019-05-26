import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CardGrid from 'components/CardGrid';


class SearchResults extends React.Component {
  render() {
    const {search} = this.props;
    const gifs = search ? search.gifs : [];
    const keyword = search ? search.keyword : '';

    if (gifs.length === 0 ) {
      return <Redirect to="/trending" />;
    } else {
      return (
        <div className="App" style={{'marginTop':'30px'}}>
          <CardGrid gifs={gifs} headline={'Search Results'} subHeadline={`For keyword: ${keyword}`} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps, null)(SearchResults);
