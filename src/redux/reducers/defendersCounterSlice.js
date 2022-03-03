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
        setDefender: (state, action) => {
            state.value = action.payload
        },
        resetDefender: (state) => {
            state.value = 0
        },
    },
});

export const { incrementDefender, decrementDefender, resetDefender, setDefender } = defendersCounterSlice.actions;
export default defendersCounterSlice.reducer;
