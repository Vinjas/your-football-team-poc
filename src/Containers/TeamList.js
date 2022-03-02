import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Fade } from "react-reveal";

import TeamCard from "../Components/TeamCard";
import getSpainTeams from "../API/getSpainTeams";

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
                                />
                            </Fade>
                        </LazyLoad>
                    )}
                )}
            </div> 
        </div>
    )
}

export default TeamLists;