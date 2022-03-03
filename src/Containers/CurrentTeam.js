import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-reveal";

import PlayerCard from "../Components/PlayerCard";
import NavBar from "../Components/nav/NavBar";
import CurrentTeamBar from "../Components/nav/CurrentTeamBar";

import { incrementDefender, decrementDefender, resetDefender } from "../redux/reducers/defendersCounterSlice";
import { incrementMidfielders, decrementMidfielders, resetMidfielders } from "../redux/reducers/midfieldersCounterSlice";
import { incrementAttackers, decrementAttackers, resetAttackers } from "../redux/reducers/attackersCounterSlice";
import { incrementGoalkeepers, decrementGoalkeepers, resetGoalkeepers } from "../redux/reducers/goalkeepersCounterSlice";

import { resetPlayersReducer } from "../redux/reducers/managePlayerSlice";

const CurrentTeam = () => {
    const dispatch = useDispatch();

    const defendersCount = useSelector((state) => state.defendersCounter.value);
    const midfieldersCount = useSelector((state) => state.midfieldersCounter.value);
    const attackersCount = useSelector((state) => state.attackersCounter.value);
    const goalkeepersCount = useSelector((state) => state.goalkeepersCounter.value);

    const playersData = useSelector((state) => state.managePlayer.value);

    return (
        <div>
            <CurrentTeamBar />

            <h1>My adidas Team</h1>

            {/* DEFENDERS */}
            <div>
                <h2>Defenders {defendersCount}</h2>

                <button onClick={() => dispatch(incrementDefender())}>Añadir</button>
                <button onClick={() => dispatch(decrementDefender())}>Quitar</button>

                {playersData.map((player) => {
                    if (player.position === "Defender") {
                        return (
                            <div>
                                <Fade bottom>
                                    <PlayerCard
                                        key={player.id} {...player}
                                        id={player.id}
                                        name={player.name}
                                        position={player.position}
                                        active={true}
                                    />
                                </Fade>
                            </div>
                        )
                    }
                })}
            </div>

            {/* MIDFIELDERS */}
            <div>
                <h2>Midfielders {midfieldersCount}</h2>

                <button onClick={() => dispatch(incrementMidfielders())}>Añadir</button>
                <button onClick={() => dispatch(decrementMidfielders())}>Quitar</button>

                {playersData.map((player) => {
                    if (player.position === "Midfielder") {
                        return (
                            <div>
                                <Fade bottom>
                                    <PlayerCard
                                        key={player.id} {...player}
                                        id={player.id}
                                        name={player.name}
                                        position={player.position}
                                    />
                                </Fade>
                            </div>
                        )
                    }
                })}
            </div>

            {/* ATTACKERS */}
            <div>
                <h2>Attackers {attackersCount}</h2>

                <button onClick={() => dispatch(incrementAttackers())}>Añadir</button>
                <button onClick={() => dispatch(decrementAttackers())}>Quitar</button>

                {playersData.map((player) => {
                    if (player.position === "Attacker") {
                        return (
                            <div>
                                <Fade bottom>
                                    <PlayerCard
                                        key={player.id} {...player}
                                        id={player.id}
                                        name={player.name}
                                        position={player.position}
                                        team={player.team}
                                        teamFlag={player.teamFlag}
                                    />
                                </Fade>
                            </div>
                        )
                    }
                })}
            </div>

            {/* GOALKEEPERS */}
            <div>
                <h2>Goalkeepers {goalkeepersCount}</h2>

                <button onClick={() => dispatch(incrementGoalkeepers())}>Añadir</button>
                <button onClick={() => dispatch(decrementGoalkeepers())}>Quitar</button>

                {playersData.map((player) => {
                    if (player.position === "Goalkeeper") {
                        return (
                            <div>
                                <Fade bottom>
                                    <PlayerCard
                                        key={player.id} {...player}
                                        id={player.id}
                                        name={player.name}
                                        position={player.position}
                                    />
                                </Fade>
                            </div>
                        )
                    }
                })}
            </div>

            <button onClick={() => {
                dispatch(resetDefender())
                dispatch(resetAttackers())
                dispatch(resetGoalkeepers())
                dispatch(resetMidfielders())
                dispatch(resetPlayersReducer())
            }}>
                RESET ALL</button>

            <NavBar />

        </div>
    )
}

export default CurrentTeam;
