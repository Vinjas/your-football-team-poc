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
        setMidfielders: (state, action) => {
            state.value = action.payload
        },
        resetMidfielders: (state) => {
            state.value = 0
        },
    },
});

export const { incrementMidfielders, decrementMidfielders, resetMidfielders, setMidfielders } = midfieldersCounterSlice.actions;
export default midfieldersCounterSlice.reducer;
