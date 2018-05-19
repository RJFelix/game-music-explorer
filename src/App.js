import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import model from './model';
import './styles/app.css';

import GameList from './components/GameList';
import Player from './components/Player';
import GameView from './components/GameView';
import Header from './components/Header';

const store = createStore(model);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container className='app-container'>
          {/* header */}
          <BrowserRouter>
            <div>
              <Route exact path="/"
                render={match => (
                  <div>  
                    <Header
                      crumbs={['Home']}
                    />
                    <GameList />
                  </div>
                )}
              />
              <Route path="/:game"
                render={({match}) => (
                  <div>
                    <Header
                      crumbs={['Home', match.params.game]}
                    />
                    <GameView
                      game={match.params.game}
                    />
                  </div>
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
