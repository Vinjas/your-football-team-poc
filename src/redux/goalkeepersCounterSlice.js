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
    },
});

export const { incrementGoalkeepers, decrementGoalkeepers } = goalkeepersCounterSlice.actions;
export default goalkeepersCounterSlice.reducer;