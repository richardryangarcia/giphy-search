import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

class LoadingSpinner extends React.Component {
  render() {
    const {application} = this.props;
    const showSpinner = application && application.loading;
    const overlayOpen = showSpinner ? 'open' : '';

    return (
      <div className={`spinner-overlay ${overlayOpen}`}>
        <div className='center-spinner'>
          {
            (showSpinner) ? (
              <Spinner animation="grow" />
            ) : (null)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}

export default connect(mapStateToProps, null)(LoadingSpinner);
