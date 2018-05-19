import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';
import { playTrack } from '../model/games';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.allGames.find(g => g.title === props.game),
    }
    this.handleTrackClick = this.handleTrackClick.bind(this);
  }

  handleTrackClick(evt, url, index) {
    evt.preventDefault();
    console.log(this.state.game.title);
    console.log(index);
    console.log(url);
    this.props.play({
      game: this.state.game.title,
      index,
      url,
    })
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      game: newProps.allGames.find(g => g.title === newProps.game),
    });
  }

  render() {
    return(
      <div>
        <Jumbotron>
          <h1>{this.state.game.title}   <small class='text-muted'>{this.state.game.publisher}, {this.state.game.year}</small></h1>
          <p>{this.state.game.description}</p>
        </Jumbotron>
        <ListGroup>
        {this.state.game.tracks.map((t, idx) =>
          <ListGroupItem 
            action 
            active={t.active} 
            key={t.title}
            onClick={(evt) => this.handleTrackClick(evt, t.url, idx)}
          >{t.title}</ListGroupItem>
        )}
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allGames: state.games,
})

const mapDispatchToProps = dispatch => ({
  play: (track) => dispatch(playTrack(track)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameView);