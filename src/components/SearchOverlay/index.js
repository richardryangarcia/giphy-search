import React from 'react';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchForm from '../Form/searchForm';
import './overlay.css';

class SearchOverlay extends React.Component {
  render(){
    const {search} = this.props;
    const searchOverlayOpen = search && search.searchOverlayOpen
    const menuClass = searchOverlayOpen ? 'open' : ''
    return (
      <div className={`menu ${menuClass}`}>
          {(searchOverlayOpen) ? (
            <div style={{'padding':'70px 16px','zIndex':'1900', 'fontWeight':'100','color':'grey'}}>
              <Container>
                <Row>
                  <Col>
                    <SearchForm />
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (null)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    search: state.search
  });
}

export default connect(mapStateToProps, null)(SearchOverlay)
