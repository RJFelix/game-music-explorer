import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import '../styles/player.css'

const Player = props => {
  if(props.url) {
    return (
      <div className='player-wrapper'>
          <ReactPlayer 
            width='100%'
            height='100%'
            url={props.url} 
            playing
            config={{
              soundcloud: {
                auto_play: true,
                sharing: false,
                download: false,
                color: '#6a6adf',
              }
            }}
          />
        </div>
    )
  } else {
    return (
      <div className='player-wrapper'>
        <Alert color='info'>
          Select a track from a game's soundtrack to play it!
        </Alert>
      </div>  
    )
  }
}

const mapStateToProps = state => ({
    url: state.music.url,
});

export default connect(mapStateToProps)(Player);