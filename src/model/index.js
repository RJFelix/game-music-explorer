import { combineReducers } from 'redux';
import music from './music';
import games from './games';

export default combineReducers({
    music,
    games,
});