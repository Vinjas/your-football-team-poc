
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

import NavBar from "../Components/nav/NavBar";
import SavedTeam from "../Components/SavedTeam";
import NewTeamButton from "../Components/buttons/NewTeamButton";

import { resetDefender } from "../redux/reducers/defendersCounterSlice";
import { resetMidfielders } from "../redux/reducers/midfieldersCounterSlice";
import { resetAttackers } from "../redux/reducers/attackersCounterSlice";
import { resetGoalkeepers } from "../redux/reducers/goalkeepersCounterSlice";
import { resetPlayersReducer } from "../redux/reducers/managePlayerSlice";

import { deleteTeam } from "../redux/reducers/savedTeamsSlice";

const MyTeams = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createNewTeam = () => {
        dispatch(resetDefender())
        dispatch(resetAttackers())
        dispatch(resetGoalkeepers())
        dispatch(resetMidfielders())
        dispatch(resetPlayersReducer())
        navigate("/teams")
    }

    const savedTeams = useSelector((state) => state.savedTeams.value);

    return (
        <div>
            <h1>My Teams</h1>

            <NewTeamButton />

            {savedTeams.map((team, idx) => {
                return (
                    <div>
                        <Fade bottom>
                            <SavedTeam
                                key={team.name + team.date}
                                id={team.name + team.date}
                                name={team.name}
                                date={team.date}
                                playersData={team.playersData}
                                defendersCount={team.defendersCount}
                                attackersCount={team.attackersCount}
                                goalkeepersCount={team.goalkeepersCount}
                                midfieldersCount={team.midfieldersCount}
                            />
                        </Fade>
                    </div>
                )
            })}
        </div>
    )
}

export default MyTeams;
