import { createSlice } from '@reduxjs/toolkit'

export const goalkeepersCounterSlice = createSlice({
    name: 'goalkeepersCounter',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementGoalkeepers: (state) => {
        state.value += 1
        },
        decrementGoalkeepers: (state) => {
        state.value -= 1
        },
        setGoalkeepers: (state, action) => {
            state.value = action.payload
        },
        resetGoalkeepers: (state) => {
            state.value = 0
        },
    },
});

export const { incrementGoalkeepers, decrementGoalkeepers, resetGoalkeepers, setGoalkeepers } = goalkeepersCounterSlice.actions;
export default goalkeepersCounterSlice.reducer;
