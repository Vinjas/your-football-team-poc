import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { incrementDefender, decrementDefender } from "../redux/defendersCounterSlice";
import { incrementMidfielders, decrementMidfielders } from "../redux/midfieldersCounterSlice";
import { incrementAttackers, decrementAttackers } from "../redux/attackersCounterSlice";
import { incrementGoalkeepers, decrementGoalkeepers } from "../redux/goalkeepersCounterSlice";

const MyTeams = () => {
    const dispatch = useDispatch();

    const defendersCount = useSelector((state) => state.defendersCounter.value);
    const midfieldersCount = useSelector((state) => state.midfieldersCounter.value);
    const attackersCount = useSelector((state) => state.attackersCounter.value);
    const goalkeepersCount = useSelector((state) => state.goalkeepersCounter.value);
    
    return (
        <div>
            <h1>My adidas Team</h1>

            {/* DEFENDERS */}
            <div>
                <h2>Defenders {defendersCount}</h2>
                
                <button onClick={() => dispatch(incrementDefender())}>Añadir</button>
                <button onClick={() => dispatch(decrementDefender())}>Quitar</button>
            </div>

            {/* MIDFIELDERS */}
            <div>
                <h2>Midfielders {midfieldersCount}</h2>
                
                <button onClick={() => dispatch(incrementMidfielders())}>Añadir</button>
                <button onClick={() => dispatch(decrementMidfielders())}>Quitar</button>
            </div>

            {/* ATTACKERS */}
            <div>
                <h2>Attackers {attackersCount}</h2>
                
                <button onClick={() => dispatch(incrementAttackers())}>Añadir</button>
                <button onClick={() => dispatch(decrementAttackers())}>Quitar</button>
            </div>

            {/* GOALKEEPERS */}
            <div>
                <h2>Goalkeepers {goalkeepersCount}</h2>
                
                <button onClick={() => dispatch(incrementGoalkeepers())}>Añadir</button>
                <button onClick={() => dispatch(decrementGoalkeepers())}>Quitar</button>
            </div>

            <div>
                <Link to="/">Volver</Link>
            </div>

        </div>


    )
}

export default MyTeams;