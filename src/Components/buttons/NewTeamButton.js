import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import { resetDefender } from "../../redux/reducers/defendersCounterSlice";
import { resetMidfielders } from "../../redux/reducers/midfieldersCounterSlice";
import { resetAttackers } from "../../redux/reducers/attackersCounterSlice";
import { resetGoalkeepers } from "../../redux/reducers/goalkeepersCounterSlice";
import { resetPlayersReducer } from "../../redux/reducers/managePlayerSlice";


const NewTeamButton = () => {
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

    return (
        <button onClick={() => createNewTeam()}>
            CREATE NEW TEAM
        </button>
    )
}

export default NewTeamButton;
