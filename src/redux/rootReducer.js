import { combineReducers } from 'redux'

import defendersCounterSlice from './reducers/defendersCounterSlice';
import midfieldersCounterSlice from './reducers/midfieldersCounterSlice';
import attackersCounterSlice from './reducers/attackersCounterSlice';
import goalkeepersCounterSlice from './reducers/goalkeepersCounterSlice';
import managePlayerSlice from './reducers/managePlayerSlice';
import savedTeamsSlice from './reducers/savedTeamsSlice';
import nameTeamSlice from './reducers/nameTeamSlice';

const rootReducer = combineReducers({
    defendersCounter: defendersCounterSlice,
    midfieldersCounter: midfieldersCounterSlice,
    attackersCounter: attackersCounterSlice,
    goalkeepersCounter: goalkeepersCounterSlice,
    managePlayer: managePlayerSlice,
    savedTeams: savedTeamsSlice,
    nameTeam: nameTeamSlice,
})

export default rootReducer;
