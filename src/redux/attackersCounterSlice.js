import { createSlice } from '@reduxjs/toolkit'

export const attackersCounterSlice = createSlice({
    name: 'attackersCounter',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementAttackers: (state) => {
        state.value += 1
        },
        decrementAttackers: (state) => {
        state.value -= 1
        },
    },
});

export const { incrementAttackers, decrementAttackers } = attackersCounterSlice.actions;
export default attackersCounterSlice.reducer;