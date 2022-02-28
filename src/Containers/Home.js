import React, { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import NewTeams from './NewTeam';
import MyTeams from './MyTeams';

const Home = () => {
    return (
        <div>
            <Fade>
                <h1>Your Adidas Team</h1>

                <nav>
                    <Link to="my-teams">My Teams</Link>
                    <Link to="create-team">Create a New Team</Link>
                </nav>
            </Fade>

            <Routes>
                <Route path="my-teams" element={<MyTeams />} />
                <Route path="create-team" element={<NewTeams />} />
            </Routes>
        </div>
    )
}

export default Home;