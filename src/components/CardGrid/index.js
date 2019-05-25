import React from 'react';
import GifCard from '../Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'

const groupBy = (colCount, array) => {
    let groupedElements = [];
    let rowElements=[];

    //loop through array
    for (let i = 0; i < array.length; i++){
      if (rowElements.length < 3) {
        rowElements.push(array[i]);
      } else {
        groupedElements.push(rowElements);
        rowElements = [];
        rowElements.push(array[i]);
      }
    }

    if (rowElements.length === 1) {
      rowElements.push(null);
      rowElements.push(null);
    } else if (rowElements.length === 2){
      rowElements.push(null);
    }

    groupedElements.push(rowElements);

  return groupedElements
}

const CardGrid = (props) => {
  const {gifs} = props;
  const groupedGifs = groupBy(3, gifs);
  return (
    <div className='card-grid' >
      <Container className='text-center' style={{justifyItems: 'center'}}>
        <Jumbotron style={{backgroundColor: '#ffffff', padding: '45px 0px 10px 0px', marginBottom: '0px'}}>
          <h1>{props.headline}</h1>
          <p>
            {props.subHeadline}
          </p>
        </Jumbotron>
        <hr/>
{/*
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col-lg' style={{'border': 'solid 1px grey'}}>New York<GifCard gifId='ntOsGc6cbKv5e' still='https://media3.giphy.com/media/ntOsGc6cbKv5e/giphy_s.gif' gif='https://media.giphy.com/media/ntOsGc6cbKv5e/giphy.gif'/></div>
            <div className='col-lg' style={{'border': 'solid 1px grey'}}>New York</div>
            <div className='col-lg' style={{'border': 'solid 1px grey'}} >New York</div>
          </div>
        </div> */}


        <div style={{marginTop: '30px'}}>
        {
          groupedGifs.map((gifGroup) => {
            return (
              <Row >
                {gifGroup.map((gif) => {
                  if (!gif) {
                    return <Col key='empty' sm>{' '}</Col>;
                  } else {
                    return <Col key={gif.id} ><GifCard  still={`${gif.images.original_still}`} gifId={gif.id} gif={`https://media.giphy.com/media/${gif.id}/giphy.gif`} /></Col>
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
