import { useSelector } from "react-redux";
import { Fade } from "react-reveal";

import PlayerCard from "../Components/PlayerCard";
import NavBar from "../Components/nav/NavBar";
import CurrentTeamBar from "../Components/nav/CurrentTeamBar";

import { teamRequirements } from "../utils/teamRequirements";

const CurrentTeam = () => {
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
                        {playersData
                            .filter((player) => player.position === "Defender")
                            .map((player) => {
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
                            })
                        }
                    </div>
                </div>

                {/* MIDFIELDERS */}
                <div>
                    <h2 className="teamContainer--position text--semibold">Midfielders {midfieldersCount} / {teamRequirements.minMidfielders}</h2>

                    <div className="teamContainer--players-list">
                    {playersData
                        .filter((player) => player.position === "Midfielder")
                        .map((player) => {
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
                        })
                    }
                    </div>
                </div>

                {/* ATTACKERS */}
                <div>
                    <h2 className="teamContainer--position text--semibold">Attackers {attackersCount} / {teamRequirements.minAttackers}</h2>

                    <div className="teamContainer--players-list">
                    {playersData
                        .filter((player) => player.position === "Attacker")
                        .map((player) => {
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
                        })
                    }
                    </div>
                </div>

                {/* GOALKEEPERS */}
                <div>
                    <h2 className="teamContainer--position text--semibold">Goalkeepers {goalkeepersCount} / {teamRequirements.minGoalkeepers}</h2>

                    <div className="teamContainer--players-list">
                    {playersData
                        .filter((player) => player.position === "Goalkeeper")
                        .map((player) => {
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
                        })
                    }
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
