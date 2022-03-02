import { useLocation } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { normalizeURL } from "../utils/urlUtils";

const TeamCard = (props) => {
    const paramURL = normalizeURL(props.name);
    const location = useLocation();

    const [teamDetails, setTeamDetails] = useState([]);
    
    return (
        <div>
            <div>
                <Link to={
                    { 
                        pathname: `/teams/${props.id}`
                    }
                }>
                    <h2>{props.name}</h2>
                </Link>
                {/* <Link to={
                    { 
                        pathname: `/competitions/${paramURL}`,
                        state: `${props.id}`  
                    }
                }>
                    <h2>{props.name}</h2>
                    <h3>{props.id}</h3>
                </Link> */}
            </div>
        </div>
    )
}

export default TeamCard;