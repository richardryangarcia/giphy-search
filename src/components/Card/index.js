import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GifPlayer from 'react-gif-player';

class GifCard extends React.Component {
  render() {
    console.log(this.props.source);
    return (
      <Card style={{ width: '18rem' }}>
        <GifPlayer variant="top" style={{height:'200px', width:'100%'}} autoplay={true} gif={this.props.gif} still={this.props.still} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GifCard;
