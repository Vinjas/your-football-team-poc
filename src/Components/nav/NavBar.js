import { Link, useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux";

import { incrementDefender, decrementDefender, resetDefender } from "../../redux/reducers/defendersCounterSlice";
import { incrementMidfielders, decrementMidfielders, resetMidfielders } from "../../redux/reducers/midfieldersCounterSlice";
import { incrementAttackers, decrementAttackers, resetAttackers } from "../../redux/reducers/attackersCounterSlice";
import { incrementGoalkeepers, decrementGoalkeepers, resetGoalkeepers } from "../../redux/reducers/goalkeepersCounterSlice";
import { resetPlayersReducer } from "../../redux/reducers/managePlayerSlice";
import { resetTeams } from "../../redux/reducers/savedTeamsSlice";


const NavBar = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <Link exact to="/">Home</Link>
            </div>
            <div>
                <Link exact to="/my-teams">My Teams</Link>
            </div>
            <div>
                <Link exact to="/current-team">Current Team</Link>
            </div>
            <div>
                <Link exact to="/teams">Teams List</Link>
            </div>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>

            <button onClick={() => {
                dispatch(resetDefender())
                dispatch(resetAttackers())
                dispatch(resetGoalkeepers())
                dispatch(resetMidfielders())
                dispatch(resetPlayersReducer())
                dispatch(resetTeams())
            }}>
                RESET ALL</button>
        </div>
    )
}

export default NavBar;
