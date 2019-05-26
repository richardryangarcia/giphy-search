import React from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PropTypes from 'prop-types';
import TagForm from 'components/Form/tagForm';
import Badge from 'react-bootstrap/Badge';

const PopOverButton = (props) => {
  const {gifId, title, buttonLabel,tags } = props;
  const buttonClass = tags && tags.length > 0  ? 'secondary' : 'outline-secondary';

  return (
        <OverlayTrigger
          trigger="click"
          key={gifId}
          placement='top'
          rootClose={true}
          overlay={
            <Popover
              id='popover-positioned-top'
              title={title}
              style={{paddingBottom: '10px'}}
            >
              <div style={{marginBottom: '10px'}}>
                {tags.map((tag) => {
                  return <Badge key={tag} variant="primary" style={{margin:'3px'}}>{tag}</Badge>
                })}
              </div>
              <TagForm gifId={gifId}/>
            </Popover>
          }
        >
          <Button variant={buttonClass} style={{width: '100%'}}>{buttonLabel}</Button>
        </OverlayTrigger>

  )
}

PopOverButton.propTypes = {
  gifId: PropTypes.string,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  tags: PropTypes.array
}

export default PopOverButton;
