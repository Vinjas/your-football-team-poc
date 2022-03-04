import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setDefender } from "../../redux/reducers/defendersCounterSlice";
import { setAttackers } from "../../redux/reducers/attackersCounterSlice";
import { setGoalkeepers } from "../../redux/reducers/goalkeepersCounterSlice";
import { setMidfielders } from "../../redux/reducers/midfieldersCounterSlice";
import { changeTeam } from "../../redux/reducers/managePlayerSlice";
import { setName } from "../../redux/reducers/nameTeamSlice";


const LoadTeamButton = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadTeam = () => {
        dispatch(setDefender(props.team.defendersCount))
        dispatch(setAttackers(props.team.attackersCount))
        dispatch(setGoalkeepers(props.team.goalkeepersCount))
        dispatch(setMidfielders(props.team.midfieldersCount))
        dispatch(changeTeam(props.team.playersData))
        dispatch(setName(props.team.name))
        navigate("/current-team")
    }

    return (
        <button className="button-load text--semibold" onClick={() => loadTeam()}>
            LOAD
        </button>
    )
}

export default LoadTeamButton;
