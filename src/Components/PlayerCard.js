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

    const {
        playersSameTeam: [playersSameTeam, setPlayersSameTeam]
    } = {
        playersSameTeam: useState(0),
        ...(props.state || {})
    }

    useEffect(() => {
        setPlayersSameTeam(playersInSameTeam);

        return playersData.find((player) => {
            if (player.id === props.id) {
                setInTeam(true)
            }
        })
    }, [useSelector((state) => state.managePlayer.value)])



    const playersInSameTeam = () => {
        return playersData.filter((player) => {
            return player.team === props.team
        }).length
    }

    const playerObject = {
        id: props.id,
        name: props.name,
        position: props.position,
        team: props.team,
        teamFlag: props.teamFlag,
    }

    const addPlayer = () => {
        if (totalPlayers < teamRequirements.maxPlayers && playersSameTeam < teamRequirements.maxSameTeam) {
            dispatch(addPlayerReducer(playerObject));
            setInTeam(true);

            switch (props.position) {
                case 'Defender':
                        dispatch(incrementDefender())
                    break;
                case 'Midfielder':
                        dispatch(incrementMidfielders())
                    break;
                case 'Attacker':
                        dispatch(incrementAttackers())
                    break;
                case 'Goalkeeper':
                        dispatch(incrementGoalkeepers())
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
                onClick={() => {addPlayer()}}>
                    Add
                </button>

                <button
                className={!inTeam ? 'player-card--button_inactive' : 'player-card--button'}
                onClick={() => {removePlayer()}}>
                    Remove
                </button>
            </div>

        </div>
    )
}

export default PlayerCard;
