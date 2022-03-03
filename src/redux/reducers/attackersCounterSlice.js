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
        setAttackers: (state, action) => {
            state.value = action.payload
        },
        resetAttackers: (state) => {
            state.value = 0
        },
    },
});

export const { incrementAttackers, decrementAttackers, resetAttackers, setAttackers } = attackersCounterSlice.actions;
export default attackersCounterSlice.reducer;
