import { combineReducers } from 'redux'

import defendersCounterSlice from './defendersCounterSlice';
import midfieldersCounterSlice from './midfieldersCounterSlice';
import attackersCounterSlice from './attackersCounterSlice';
import goalkeepersCounterSlice from './goalkeepersCounterSlice';

const rootReducer = combineReducers({
    defendersCounter: defendersCounterSlice,
    midfieldersCounter: midfieldersCounterSlice,
    attackersCounter: attackersCounterSlice,
    goalkeepersCounter: goalkeepersCounterSlice,
})

export default rootReducer;