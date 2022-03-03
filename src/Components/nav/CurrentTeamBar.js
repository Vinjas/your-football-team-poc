import { useSelector, useDispatch } from "react-redux";
import { teamRequirements } from "../../utils/teamRequirements";
import { useNavigate } from "react-router-dom";

import { saveTeam } from "../../redux/reducers/savedTeamsSlice";

const CurrentTeamBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const defendersCount = useSelector((state) => state.defendersCounter.value);
    const midfieldersCount = useSelector((state) => state.midfieldersCounter.value);
    const attackersCount = useSelector((state) => state.attackersCounter.value);
    const goalkeepersCount = useSelector((state) => state.goalkeepersCounter.value);

    const playersData = useSelector((state) => state.managePlayer.value);

    const totalPlayers = defendersCount + midfieldersCount + attackersCount + goalkeepersCount;

    const isValidTeam = () => {
        if (totalPlayers <= teamRequirements.maxPlayers
        && defendersCount >= teamRequirements.minDefenders
        && midfieldersCount >= teamRequirements.minMidfielders
        && attackersCount >= teamRequirements.minAttackers
        && goalkeepersCount >= teamRequirements.minGoalkeepers) {
            alert("SUCCESS: TEAM SAVED")

            const teamObject = {
                name: 'Saved Team',
                date: Date.now(),
                playersData: playersData,
                defendersCount: defendersCount,
                midfieldersCount: midfieldersCount,
                attackersCount: attackersCount,
                goalkeepersCount: goalkeepersCount,
            }

            dispatch(saveTeam(teamObject))
            navigate("/")
        }
        else {
            return alert("ERROR: TEAM COMPOSITION INVALID")
        }
    }

    return (
        <div>
            <div>
                Defenders {defendersCount}/{teamRequirements.minDefenders}
            </div>
            <div>
                Midfielders {midfieldersCount}/{teamRequirements.minMidfielders}
            </div>
            <div>
                Attackers {attackersCount}/{teamRequirements.minAttackers}
            </div>
            <div>
                Goalkeepers {goalkeepersCount}/{teamRequirements.minGoalkeepers}
            </div>
            <div>
                Total Players {totalPlayers}/{teamRequirements.maxPlayers}
            </div>

            <button onClick={() => isValidTeam()}>SAVE TEAM</button>

        </div>
    )
}

export default CurrentTeamBar;
