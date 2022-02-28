// React-Router
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// Containers
import Home from "./Containers/Home";
import NewTeams from './Containers/NewTeam';
import MyTeams from './Containers/MyTeams';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="create-team/" element={<NewTeams />} />
                <Route path="my-teams/" element={<MyTeams />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
