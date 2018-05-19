import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import model from './model';
import './App.css';

import GameList from './components/GameList';
import Player from './components/Player';

const store = createStore(model);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          {/* header */}
          <BrowserRouter>
            <div>
              <Route exact path="/"
                render={match => (  
                  <GameList />
                )}
              />
              <Route path="/:game"
                render={({match}) => (
                  <div>{match.params.game}</div>
                )}
              />
            </div>
          </BrowserRouter>
          <Player />
        </Container>
      </Provider>
    );
  }
}

export default App;
