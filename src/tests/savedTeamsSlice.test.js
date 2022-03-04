import reducer, { saveTeam, deleteTeam, resetTeams } from "../redux/reducers/savedTeamsSlice";

test('reset saved teams', () => {
    const previousState = {"value": [
        { name: "team1" }, { name: "team2" }, { name: "team3" }
    ]};

    expect(reducer(previousState, resetTeams())).toEqual({"value": []})
})

test('save team', () => {
    const previousState = {"value": [
        { name: "team1" }, { name: "team2" }
    ]};

    expect(reducer(previousState, saveTeam({ name: "team3" }))).toEqual({"value": [
        { name: "team1" }, { name: "team2" }, { name: "team3" }
    ]})
})

test('delete team', () => {
    const previousState = {"value": [
        { id: "test team one04-03-2022 23:05" }, { id: "test team two05-02-2022 23:06" }
    ]};

    expect(reducer(previousState, deleteTeam("test team two05-02-2022 23:06"))).toEqual({"value": [
        { id: "test team one04-03-2022 23:05" }
    ]})
})