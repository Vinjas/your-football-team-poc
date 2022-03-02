import { createSlice } from '@reduxjs/toolkit'

export const midfieldersCounterSlice = createSlice({
    name: 'midfieldersCounter',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementMidfielders: (state) => {
        state.value += 1
        },
        decrementMidfielders: (state) => {
        state.value -= 1
        },
    },
});

export const { incrementMidfielders, decrementMidfielders } = midfieldersCounterSlice.actions;
export default midfieldersCounterSlice.reducer;