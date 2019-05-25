import React from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PropTypes from 'prop-types';
import TagForm from 'components/Form/tagForm';

const PopOverButton = (props) => {
  const {gifId, title, hasTags, buttonLabel } = props;
  const outline = hasTags ? '' : 'outline';

  return (
        <OverlayTrigger
          trigger="click"
          key={gifId}
          placement='top'
          overlay={
            <Popover
              id='popover-positioned-top'
              title={title}
              style={{paddingBottom: '10px'}}
            >
              <TagForm gifId={gifId}/>
            </Popover>
          }
        >
          <Button variant={`${outline}-secondary`}>{buttonLabel}</Button>
        </OverlayTrigger>

  )
}

PopOverButton.propTypes = {
  hasTags: PropTypes.bool,
  gifId: PropTypes.string,
  title: PropTypes.string,
  buttonLabel: PropTypes.string
}

export default PopOverButton;
