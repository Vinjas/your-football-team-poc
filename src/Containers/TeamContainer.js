import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { Fade } from "react-reveal";

import getTeamDetails from "../API/getTeamDetails";
import PlayerCard from "../Components/PlayerCard";

const TeamContainer = (props) => {
    const location = useLocation();

    const [teamDetails, setTeamDetails] = useState([]);
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        getTeamDetails(location.pathname)
        .then((data) => {
            setTeamDetails(data)
            setPlayers(data.squad)
        })
    }, []);
    
    return (
        <div>
            <h1>{teamDetails.name}</h1>
            <h2>{teamDetails.shortName}</h2>

            <img src={teamDetails.crestUrl}></img>

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
                                />
                            </Fade>
                        </LazyLoad>
                        )
                    }
                    }
                )}
            </div>

        </div>
    )
}

export default TeamContainer;