// React-Router
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Containers
import Home from "./Containers/Home";
import TeamLists from "./Containers/TeamList";
import MyTeams from './Containers/MyTeams';
import TeamContainer from "./Containers/TeamContainer";
import CurrentTeam from "./Containers/CurrentTeam";

import { store } from './redux/store';
import { Provider } from 'react-redux';


const App = () => {
    
    return (
        <BrowserRouter>
            <Provider store={store}> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="teams" element={<TeamLists />} />
                    <Route path="teams/:id" element={<TeamContainer />} />
                    <Route path="current-team" element={<CurrentTeam />} />
                    <Route path="my-teams" element={<MyTeams />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
