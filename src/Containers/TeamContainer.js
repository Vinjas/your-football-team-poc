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
        <div>
            <CurrentTeamBar />

            <h1>{teamDetails.name}</h1>
            <h2>{teamDetails.shortName}</h2>

            <img src={teamDetails.crestUrl} alt={teamDetails.name}></img>

            <div>
                {division[0] ? division[0].name : ""}
            </div>

            <div>
                Estadio: {teamDetails.venue}
            </div>

            <div>
                Fundación: {teamDetails.founded}
            </div>

            <h2>Same team Players: {playersSameTeam} / {teamRequirements.maxSameTeam}</h2>

            <div>
                {players.map((player) => {
                    if (player.position) {
                        return  (
                        <LazyLoad key={player.id}>
                            <Fade bottom>
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

            <NavBar />

        </div>
    )
}

export default TeamContainer;
