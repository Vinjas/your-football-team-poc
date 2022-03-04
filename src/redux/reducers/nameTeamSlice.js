import { createSlice } from '@reduxjs/toolkit'

export const nameTeamSlice = createSlice({
    name: 'midfieldersCounter',
    initialState: {
        value: 'My adidas Team',
    },
    reducers: {
        setName: (state, action) => {
        state.value = action.payload
        },
    },
});

export const { setName } = nameTeamSlice.actions;
export default nameTeamSlice.reducer;
