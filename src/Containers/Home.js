import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import NavBar from '../Components/nav/NavBar';
import NewTeamButton from '../Components/buttons/NewTeamButton';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Fade>
            <div className="home">
                <div>
                    <div className="home--above"></div>
                    <div className="home--header">
                        <div className="home--title text--bold text--white text--title">Your adidas Team</div>
                    </div>
                    <div className="home--below"></div>
                </div>

                <div className="home--menu">
                    <button className="button-main button-main--loadTeam" onClick={() => navigate("/my-teams")}>
                        MY TEAMS
                    </button>

                    <NewTeamButton />
                </div>

                <NavBar  />

            </div>
        </Fade>
    )
}

export default Home;
