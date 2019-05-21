import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GifPlayer from 'react-gif-player';

class GifCard extends React.Component {
  render() {
    console.log(this.props.source);
    return (
      <Card className='shadow p-3 mb-5 bg-white rounded' style={{ width: '18rem', padding: '25px', marginBottom:'25px', border:'none' }}>
        <GifPlayer variant="top" style={{height:'200px', width:'100%'}} autoplay={true} gif={this.props.gif} still={this.props.still} />
        <Card.Body>
          <Button variant="outline-primary" style={{width: '100%', 'marginBottom': '10px'}} >Add to Favorites</Button>
          <Button variant="outline-secondary" style={{width: '100%'}}>Add tags</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GifCard;
