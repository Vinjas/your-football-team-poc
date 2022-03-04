
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";

import NavBar from "../Components/nav/NavBar";
import SavedTeam from "../Components/SavedTeam";
import NewTeamButton from "../Components/buttons/NewTeamButton";

const MyTeams = () => {
    const savedTeams = useSelector((state) => state.savedTeams.value);

    return (
        <div className="myTeams">
            <div className="home--above"></div>

            <div className="home--header">
                <h1 className="home--title text--bold text--white text--title">My Teams</h1>
            </div>

            <div className="home--below"></div>

            {savedTeams.map((team, idx) => {
                return (
                    <div className="myTeams--saved">
                        <Fade bottom>
                            <SavedTeam
                                key={team.name + team.date}
                                id={team.name + team.date}
                                name={team.name}
                                date={team.date}
                                playersData={team.playersData}
                                defendersCount={team.defendersCount}
                                attackersCount={team.attackersCount}
                                goalkeepersCount={team.goalkeepersCount}
                                midfieldersCount={team.midfieldersCount}
                            />
                        </Fade>
                    </div>
                )
            })}

            <div className="myTeams--new">
                <NewTeamButton />
            </div>

            <NavBar />

        </div>
    )
}

export default MyTeams;
