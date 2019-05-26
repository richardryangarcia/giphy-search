import React from 'react';
import GifCard from '../Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {groupBy} from 'utils/utils';
import PropTypes from 'prop-types';

const gifColumn = (gif) => {
  if (!gif) return null;

  return (
    <div className='col-md-4' key={gif.id}>
      <div className='gif-container'>
        <GifCard  still={`${gif.images.original_still.url}`} gifId={gif.id} gif={`https://media.giphy.com/media/${gif.id}/giphy.gif`} />
        {null}
      </div>
    </div>
  )
}

const gifRow = (gifGroup) => {
  const keyId = gifGroup && gifGroup[0] ? gifGroup[0].id : '';
  return (
    <Row key={keyId}>
      {gifGroup.map((gif) => {
        return gifColumn(gif);
      })}
    </Row>
  )
}

const CardGrid = (props) => {
  const {gifs} = props;
  const groupedGifs = groupBy(3, gifs);
  return (
      <Container >
        <Jumbotron >
          <h1>{props.headline}</h1>
          <p>
            {props.subHeadline}
          </p>
        </Jumbotron>
        <hr/>

        <div className='card-grid'>
          {
            groupedGifs.map((gifGroup) => {
              return gifRow(gifGroup)
            })
          }
        </div>
      </Container>
  );
}

CardGrid.propTypes = {
  gifs: PropTypes.array,
}

export default CardGrid;
