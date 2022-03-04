import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse, faFutbol, faUpload, faPlus } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="navBar">
            <div>
                <button className="navBar--icon" onClick={() => navigate("/")}>
                    <FontAwesomeIcon className="text--icon" icon={faHouse} />
                </button>
            </div>
            <div>
                <button className="navBar--icon" onClick={() => navigate("/my-teams")}>
                    <FontAwesomeIcon className="text--icon" icon={faUpload} />
                </button>
            </div>
            <div>
                <button className="navBar--icon navBar--icon__add" onClick={() => navigate("/teams")}>
                    <FontAwesomeIcon className="text--icon" icon={faPlus} />
                </button>
            </div>
            <div>
                <button className="navBar--icon" onClick={() => navigate("/current-team")}>
                    <FontAwesomeIcon className="text--icon" icon={faFutbol} />
                </button>
            </div>
            <div>
                <button className="navBar--icon" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon className="text--icon" icon={faArrowLeft} />
                </button>
            </div>

            {/* <button onClick={() => {
                dispatch(resetDefender())
                dispatch(resetAttackers())
                dispatch(resetGoalkeepers())
                dispatch(resetMidfielders())
                dispatch(resetPlayersReducer())
                dispatch(resetTeams())
            }}>
                RESET ALL</button> */}
        </div>
    )
}

export default NavBar;
