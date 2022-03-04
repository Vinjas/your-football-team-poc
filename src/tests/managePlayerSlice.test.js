import  reducer, { addPlayerReducer, removePlayerReducer, changeTeam, resetPlayersReducer } from "../redux/reducers/managePlayerSlice";

test('reset players', () => {
    const previousState = {"value": [
        { player: "Player One" }
    ]}
    
    expect(reducer(previousState, resetPlayersReducer())).toEqual({"value": []})
})

test('add a new player', () => {
    const previousState = {"value": []}

    expect(reducer(previousState, addPlayerReducer({ player: "Tests Player" }))).toEqual(
        { "value": [{ player: "Tests Player"} ]}
    )
})

test('change team', () => {
    const previousState = {"value": [
        {player: "Player One"}, {player: "Player Two"}
    ]}

    expect(reducer(previousState, changeTeam([{ player: "Player Three" }]))).toEqual(
        { "value": [{ player: "Player Three"} ]}
    )
})

test('remove player', () => {
    const previousState = {"value": [
        { id: 77734, id: 22654 }
    ]}

    expect(reducer(previousState, removePlayerReducer(77734))).toEqual(
        { "value": [{ id: 22654} ]}
    )
})