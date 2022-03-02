// React-Router
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// Containers
import Home from "./Containers/Home";
import TeamLists from "./Containers/TeamList";
import MyTeams from './Containers/MyTeams';
import TeamContainer from "./Containers/TeamContainer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="teams" element={<TeamLists />} />
                <Route path="teams/:id" element={<TeamContainer />} />
                <Route path="my-teams" element={<MyTeams />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
