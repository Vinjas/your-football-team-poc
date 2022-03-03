import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { incrementDefender, decrementDefender } from "../redux/reducers/defendersCounterSlice";
import { incrementMidfielders, decrementMidfielders } from "../redux/reducers/midfieldersCounterSlice";
import { incrementAttackers, decrementAttackers } from "../redux/reducers/attackersCounterSlice";
import { incrementGoalkeepers, decrementGoalkeepers } from "../redux/reducers/goalkeepersCounterSlice";

import { addPlayerReducer, removePlayerReducer, resetPlayersReducer } from "../redux/reducers/managePlayerSlice";
import { teamRequirements } from "../utils/teamRequirements";

const PlayerCard = (props) => {
    const dispatch = useDispatch();

    const defendersCount = useSelector((state) => state.defendersCounter.value);
    const midfieldersCount = useSelector((state) => state.midfieldersCounter.value);
    const attackersCount = useSelector((state) => state.attackersCounter.value);
    const goalkeepersCount = useSelector((state) => state.goalkeepersCounter.value);

    const playersData = useSelector((state) => state.managePlayer.value);

    const totalPlayers = defendersCount + midfieldersCount + attackersCount + goalkeepersCount;

    const [inTeam, setInTeam] = useState(false);

    useEffect(() => {
        return playersData.find((player) => {
            if (player.id === props.id) {
                setInTeam(true)
            }
        })
    }, [])

    const playerObject = {
        id: props.id,
        name: props.name,
        position: props.position,
        team: props.team,
        teamFlag: props.teamFlag,
    }

    const addPlayer = () => {

        if (totalPlayers < teamRequirements.maxPlayers) {
            switch (props.position) {
                case 'Defender':
                        dispatch(incrementDefender())
                        dispatch(addPlayerReducer(playerObject));
                        setInTeam(true);
                    break;
                case 'Midfielder':
                        dispatch(incrementMidfielders())
                        dispatch(addPlayerReducer(playerObject));
                        setInTeam(true);
                    break;
                case 'Attacker':
                        dispatch(incrementAttackers())
                        dispatch(addPlayerReducer(playerObject));
                        setInTeam(true);
                    break;
                case 'Goalkeeper':
                        dispatch(incrementGoalkeepers())
                        dispatch(addPlayerReducer(playerObject));
                        setInTeam(true);
                    break;
                default:
                    return;
            }
        }
    }

    const removePlayer = () => {
        dispatch(removePlayerReducer(props.id));
        setInTeam(false);

        switch (props.position) {
            case 'Defender':
                dispatch(decrementDefender())
                break;
            case 'Midfielder':
                dispatch(decrementMidfielders())
                break;
            case 'Attacker':
                dispatch(decrementAttackers())
                break;
            case 'Goalkeeper':
                dispatch(decrementGoalkeepers())
                break;
            default:
                return;
        }
    }

    return (
        <div className={inTeam ? 'player-card player-card--inactive' : 'player-card'}>
            <div>
                <strong>{props.name}</strong>
            </div>

            <div>
                <img src={props.teamFlag} alt={props.team}></img>
            </div>

            <div>
                {props.team}
            </div>

            <div>
                {props.position}
            </div>

            <div>
                <button
                className={inTeam ? 'player-card--button_inactive' : 'player-card--button'}
                onClick={() => addPlayer()}>
                    Add
                </button>

                <button
                className={!inTeam ? 'player-card--button_inactive' : 'player-card--button'}
                onClick={() => removePlayer()}>
                    Remove
                </button>
            </div>

        </div>
    )
}

export default PlayerCard;
