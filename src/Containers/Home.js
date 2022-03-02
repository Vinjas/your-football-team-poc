import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import TeamLists from './TeamList';
import MyTeams from './MyTeams';

const Home = () => {
    /* useEffect(() => {

    }) */
    
    return (
        <div>
            <Fade>
                <h1>Your Adidas Team</h1>

                <div>
                    <Link to="my-teams">My Teams</Link>
                </div>
                
                <div>
                    <Link to="teams">Create a New Team</Link>
                </div>
            </Fade>

        </div>
    )
}

export default Home;