import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import NavBar from '../Components/nav/NavBar';
import NewTeamButton from '../Components/buttons/NewTeamButton';

const Home = () => {

    return (
        <div>
            <Fade>
                <h1>Your Adidas Team</h1>

                <div>
                    <strong>
                        <Link to="my-teams">My Teams</Link>
                    </strong>
                </div>

                <div>
                    <NewTeamButton />
                </div>

            </Fade>

            <NavBar />

        </div>
    )
}

export default Home;
