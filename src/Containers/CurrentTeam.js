import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-reveal";

import PlayerCard from "../Components/PlayerCard";
import NavBar from "../Components/nav/NavBar";
import CurrentTeamBar from "../Components/nav/CurrentTeamBar";

import { teamRequirements } from "../utils/teamRequirements";

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

    const teamName = useSelector((state) => state.nameTeam.value);

    return (
        <div className="teamContainer">
            <CurrentTeamBar />

            <div>
                <div className="home--header">
                    <h1 className="home--title text--bold text--white text--title">{teamName}</h1>
                </div>
                <div className="home--below"></div>

                {/* DEFENDERS */}
                <div>
                    <h2 className="teamContainer--position text--semibold">Defenders {defendersCount} / {teamRequirements.minDefenders}</h2>

                    <div className="teamContainer--players-list">
                    {playersData.map((player) => {
                        if (player.position === "Defender") {
                            return (
                                <div>
                                    <Fade>
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
                </div>

                {/* MIDFIELDERS */}
                <div>
                    <h2 className="teamContainer--position text--semibold">Midfielders {midfieldersCount} / {teamRequirements.minMidfielders}</h2>

                    <div className="teamContainer--players-list">
                    {playersData.map((player) => {
                        if (player.position === "Midfielder") {
                            return (
                                <div>
                                    <Fade>
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
                </div>

                {/* ATTACKERS */}
                <div>
                    <h2 className="teamContainer--position text--semibold">Attackers {attackersCount} / {teamRequirements.minAttackers}</h2>

                    <div className="teamContainer--players-list">
                    {playersData.map((player) => {
                        if (player.position === "Attacker") {
                            return (
                                <div>
                                    <Fade>
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
                </div>

                {/* GOALKEEPERS */}
                <div>
                    <h2 className="teamContainer--position text--semibold">Goalkeepers {goalkeepersCount} / {teamRequirements.minGoalkeepers}</h2>

                    <div className="teamContainer--players-list">
                    {playersData.map((player) => {
                        if (player.position === "Goalkeeper") {
                            return (
                                <div>
                                    <Fade>
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
                </div>

                {/* <button onClick={() => {
                    dispatch(resetDefender())
                    dispatch(resetAttackers())
                    dispatch(resetGoalkeepers())
                    dispatch(resetMidfielders())
                    dispatch(resetPlayersReducer())
                }}>
                    RESET ALL</button> */}
            </div>

            <NavBar />

        </div>
    )
}

export default CurrentTeam;
