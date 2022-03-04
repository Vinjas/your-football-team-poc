import { createSlice } from '@reduxjs/toolkit'

export const savedTeamsSlice = createSlice({
    name: 'savedTeams',
    initialState: {
        value: [],
    },
    reducers: {
        saveTeam: (state, action) => {
            state.value.push(action.payload)
        },
        deleteTeam: (state, action) => {
            state.value = state.value.filter((team) => {
                return (team.id) !== action.payload;
            })
        },
        resetTeams: (state) => {
            state.value = []
        },
    },
});

export const { saveTeam, deleteTeam, resetTeams } = savedTeamsSlice.actions;
export default savedTeamsSlice.reducer;
