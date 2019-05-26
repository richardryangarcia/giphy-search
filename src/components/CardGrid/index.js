import React from 'react';
import GifCard from '../Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {groupBy} from 'utils/utils';

const CardGrid = (props) => {
  const {gifs} = props;
  const groupedGifs = groupBy(3, gifs);
  return (
    <div  >
      <Container className='text-center'>
        <Jumbotron>
          <h1>{props.headline}</h1>
          <p>
            {props.subHeadline}
          </p>
        </Jumbotron>
        <hr/>

        <div className='card-grid'>
        {
          groupedGifs.map((gifGroup) => {
            const key_id = gifGroup && gifGroup[0] ? gifGroup[0].id : '';
            return (
              <Row key={key_id}>
                {gifGroup.map((gif) => {
                  if (!gif) {
                    return <Col key='empty' sm>{' '}</Col>;
                  } else {
                    return <Col key={gif.id} ><GifCard  still={`${gif.images.original_still.url}`} gifId={gif.id} gif={`https://media.giphy.com/media/${gif.id}/giphy.gif`} /></Col>
                  }
                })}
              </Row>
            )
          })
        }
      </div>
      </Container>
    </div>
  );
}

export default CardGrid;
