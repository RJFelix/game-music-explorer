import React from 'react';
import { CardDeck, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import Game from './Game';

class GameList extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Row>
        <Col>
          <CardDeck>
              {this.props.games.map(g => (
                <Game
                  {...g}
                  key={g.title}
                />
              ))}
          </CardDeck>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  games: state.games,
})

export default connect(mapStateToProps)(GameList);