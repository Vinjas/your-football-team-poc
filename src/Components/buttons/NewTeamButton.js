import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import { resetDefender } from "../../redux/reducers/defendersCounterSlice";
import { resetMidfielders } from "../../redux/reducers/midfieldersCounterSlice";
import { resetAttackers } from "../../redux/reducers/attackersCounterSlice";
import { resetGoalkeepers } from "../../redux/reducers/goalkeepersCounterSlice";
import { resetPlayersReducer } from "../../redux/reducers/managePlayerSlice";
import { setName } from "../../redux/reducers/nameTeamSlice";

const NewTeamButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createNewTeam = () => {
        dispatch(resetDefender())
        dispatch(resetAttackers())
        dispatch(resetGoalkeepers())
        dispatch(resetMidfielders())
        dispatch(resetPlayersReducer())
        dispatch(setName('My adidas Team'))
        navigate("/teams")
    }

    return (
        <button className="button-main button-main--newTeam text--semibold" onClick={() => createNewTeam()}>
            CREATE NEW TEAM
        </button>
    )
}

export default NewTeamButton;
