import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { Fade } from "react-reveal";
import { teamRequirements } from "../utils/teamRequirements";

import getTeamDetails from "../API/getTeamDetails";
import PlayerCard from "../Components/PlayerCard";
import NavBar from "../Components/nav/NavBar";
import CurrentTeamBar from "../Components/nav/CurrentTeamBar";

const TeamContainer = () => {
    const location = useLocation();

    const [teamDetails, setTeamDetails] = useState([]);
    const [players, setPlayers] = useState([]);
    const [division, setDivision] = useState([]);
    const [playersSameTeam, setPlayersSameTeam] = useState(0);

    useEffect(() => {
        getTeamDetails(location.pathname)
        .then((data) => {
            setTeamDetails(data)
            setPlayers(data.squad)
            setDivision(data.activeCompetitions.filter((competition) => {
                return competition.name.includes("Divisi")
            }))
        })
    }, []);

    return (
        <div className="teamContainer">
            <CurrentTeamBar />

            <div>
                <div className="teamContainer--header">
                    <h1>{teamDetails.name}</h1>
                </div>

                <div className="teamContainer--subheader">
                    <h2>{teamDetails.shortName}</h2>
                </div>
            </div>

            <div className="teamContainer--team-info">
                <img className="teamContainer--team-info__img" src={teamDetails.crestUrl} alt={teamDetails.name}></img>

                <div className="text--semibold">
                    {division[0] ? division[0].name : ""}
                </div>

                <div>
                    Estadio: {teamDetails.venue}
                </div>

                <div>
                    Fundación: {teamDetails.founded}
                </div>
            </div>



            <div className="teamContainer--same-team">
                <div className="text--semibold">Same team Players: {playersSameTeam} / {teamRequirements.maxSameTeam}</div>
            </div>

            <div>
                <div className="teamContainer--position text--semibold">Defenders</div>
                    <div className="teamContainer--players-list">
                    {players.map((player) => {
                        if (player.position === "Defender") {
                            return  (
                            <LazyLoad key={player.id}>
                                <Fade>
                                    <PlayerCard
                                        key={player.id} {...player}
                                        id={player.id}
                                        name={player.name}
                                        position={player.position}
                                        team={teamDetails.name}
                                        teamFlag={teamDetails.crestUrl}
                                        state={{ playersSameTeam: [playersSameTeam, setPlayersSameTeam] }}
                                    />
                                </Fade>
                            </LazyLoad>
                            )
                        }
                    })}
                    </div>
                <div className="teamContainer--position text--semibold">Midfielders</div>
                    <div className="teamContainer--players-list">
                    {players.map((player) => {
                        if (player.position === "Midfielder") {
                            return  (
                            <LazyLoad key={player.id}>
                                <Fade>
                                    <PlayerCard
                                        key={player.id} {...player}
                                        id={player.id}
                                        name={player.name}
                                        position={player.position}
                                        team={teamDetails.name}
                                        teamFlag={teamDetails.crestUrl}
                                        state={{ playersSameTeam: [playersSameTeam, setPlayersSameTeam] }}
                                    />
                                </Fade>
                            </LazyLoad>
                            )
                        }
                    })}
                    </div>
                <div className="teamContainer--position text--semibold">Attackers</div>
                    <div className="teamContainer--players-list">
                    {players.map((player) => {
                        if (player.position === "Attacker") {
                            return  (
                            <LazyLoad key={player.id}>
                                <Fade>
                                    <PlayerCard
                                        key={player.id} {...player}
                                        id={player.id}
                                        name={player.name}
                                        position={player.position}
                                        team={teamDetails.name}
                                        teamFlag={teamDetails.crestUrl}
                                        state={{ playersSameTeam: [playersSameTeam, setPlayersSameTeam] }}
                                    />
                                </Fade>
                            </LazyLoad>
                            )
                        }
                    })}
                    </div>
                <div className="teamContainer--position text--semibold">Goalkeepers</div>
                    <div className="teamContainer--players-list">
                    {players.map((player) => {
                        if (player.position === "Goalkeeper") {
                            return  (
                            <LazyLoad key={player.id}>
                                <Fade>
                                    <PlayerCard
                                        key={player.id} {...player}
                                        id={player.id}
                                        name={player.name}
                                        position={player.position}
                                        team={teamDetails.name}
                                        teamFlag={teamDetails.crestUrl}
                                        state={{ playersSameTeam: [playersSameTeam, setPlayersSameTeam] }}
                                    />
                                </Fade>
                            </LazyLoad>
                            )
                        }
                    })}
                    </div>
            </div>

            <NavBar />

        </div>
    )
}

export default TeamContainer;
