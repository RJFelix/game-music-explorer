import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Game extends React.Component {

  render() {
    return (
      <Card>
        <CardImg top src="http://via.placeholder.com/350x150" />
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.publisher} - {this.props.year}</CardSubtitle>
          <CardText>{this.props.description}</CardText>
          <Link to={this.props.title}>
            <Button 
              color="primary"
            >
              Soundtrack
            </Button>
          </Link>
        </CardBody>
      </Card>
    );
  }
}

export default Game;