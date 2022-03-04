import { createSlice } from '@reduxjs/toolkit'

export const managePlayerSlice = createSlice({
    name: 'managePlayer',
    initialState: {
        value: [],
    },
    reducers: {
        addPlayerReducer: (state, action) => {
            state.value.push(action.payload)
        },
        removePlayerReducer: (state, action) => {
            state.value = state.value.filter((player) => {
                return player.id !== action.payload;
            })
        },
        changeTeam: (state, action) => {
            state.value = action.payload;
        },
        resetPlayersReducer: (state) => {
            state.value = []
        },
    },
});

export const { addPlayerReducer, removePlayerReducer, resetPlayersReducer, changeTeam } = managePlayerSlice.actions;
export default managePlayerSlice.reducer;
