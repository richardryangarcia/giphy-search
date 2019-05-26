import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateFavorites} from '../../redux/favorites/actions';
import {openModal} from '../../redux/application/actions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GifPlayer from 'react-gif-player';
import PropTypes from 'prop-types';
import PopOverButton from 'components/PopOverButton';

class GifCard extends React.Component {
  triggerOpenModal = () => {
    const {actions} = this.props;
    actions.openModal('login');
  }

  triggerAddToFavorites = () => {
    const {actions, gifId} = this.props;
    actions.updateFavorites(gifId);
  }

  renderTagButton = () => {
    const {user, gifId, tags} = this.props;
    const taggedGifs = tags && tags.gifs ? tags.gifs : [];
    const tagLabels = taggedGifs && taggedGifs[gifId] ? taggedGifs[gifId] : [];

    if (user && user.authorized) {
      return <PopOverButton gifId={gifId} tags={tagLabels} title='Tags' buttonLabel='Add Tags'/>
    } else {
      return <Button variant="outline-secondary" onClick={this.triggerOpenModal}>Add tags</Button>
    }
  }

  render() {
    const {favorites, user , gifId, gif, still} = this.props;
    const buttonText = favorites && favorites.gifIds && favorites.gifIds.includes(gifId) ? 'Favorited' : 'Add To Favorites';
    const buttonClass = buttonText === 'Favorited'  ? 'primary' : 'outline-primary';
    const handleOnClick = user && user.authorized ? this.triggerAddToFavorites : this.triggerOpenModal;
    return (
      <Card className='responsive-card' >
        <GifPlayer variant="top" autoplay={true} gif={gif} still={still} />
        <Card.Body>
          <Button variant={buttonClass} onClick={handleOnClick}>{buttonText}</Button>
          {this.renderTagButton()}
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
    tags: state.tags,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({updateFavorites, openModal}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GifCard);
