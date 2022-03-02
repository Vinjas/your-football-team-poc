import { createSlice } from '@reduxjs/toolkit'

export const defendersCounterSlice = createSlice({
    name: 'defendersCounter',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementDefender: (state) => {
        state.value += 1
        },
        decrementDefender: (state) => {
        state.value -= 1
        },
    },
});

export const { incrementDefender, decrementDefender } = defendersCounterSlice.actions;
export default defendersCounterSlice.reducer;