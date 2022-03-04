import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Fade } from "react-reveal";

import TeamCard from "../Components/TeamCard";
import getSpainTeams from "../API/getSpainTeams";
import NavBar from "../Components/nav/NavBar";
import CurrentTeamBar from "../Components/nav/CurrentTeamBar";

const TeamLists = () => {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        getSpainTeams()
        .then((data) => {
            setTeams(data.teams)
        })
    }, []);

    return (
        <div>

            <CurrentTeamBar />

            <h1>Teams</h1>

            <div className="">
                {teams.map((team) => {
                    return  (
                        <LazyLoad key={team.id}>
                            <Fade bottom>
                                <TeamCard
                                    key={team.id} {...team}
                                    id={team.id}
                                    name={team.name}
                                    img={team.crestUrl}
                                />
                            </Fade>
                        </LazyLoad>
                    )
                })}
            </div>

            <NavBar />

        </div>
    )
}

export default TeamLists;
