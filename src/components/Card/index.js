import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateFavorites} from '../../redux/favorites/actions';
import {openModal} from '../../redux/application/actions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GifPlayer from 'react-gif-player';
import PropTypes from 'prop-types';

class GifCard extends React.Component {
  triggerOpenModal = () => {
    const {actions} = this.props;
    actions.openModal('login');
  }

  triggerAddToFavorites = () => {
    const {actions, gif_id} = this.props;
    actions.updateFavorites(gif_id);
  }

  render() {
    const {favorites, user , gifId, gif, still} = this.props
    const buttonText = favorites && favorites.gifIds && favorites.gifIds.includes(gifId) ? 'Favorited' : 'Add To Favorites';
    const buttonClass = buttonText === 'Favorited'  ? 'primary' : 'outline-primary';
    const handleOnClick = user && user.authorized ? this.triggerAddToFavorites : this.triggerOpenModal;
    return (
      <Card className='shadow p-3 mb-5 bg-white rounded' >
        <GifPlayer variant="top" autoplay={true} gif={gif} still={still} />
        <Card.Body>
          <Button variant={buttonClass} onClick={handleOnClick} >{buttonText}</Button>
          <Button variant="outline-secondary" onClick={handleOnClick}>Add tags</Button>
        </Card.Body>
      </Card>
    );
  }
}

GifCard.propTypes = {
  still: PropTypes.string,
  gifId: PropTypes.string,
  gif: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({updateFavorites, openModal}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GifCard);
