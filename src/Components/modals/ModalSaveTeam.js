import Popup from "reactjs-popup"
import { useSelector, useDispatch } from "react-redux";
import { teamRequirements } from "../../utils/teamRequirements";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { saveTeam } from "../../redux/reducers/savedTeamsSlice";
import { formatDate } from "../../utils/formatDate";
import { setName } from "../../redux/reducers/nameTeamSlice";

const ModalSaveTeam = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const playersData = useSelector((state) => state.managePlayer.value);

    const defendersCount = useSelector((state) => state.defendersCounter.value);
    const midfieldersCount = useSelector((state) => state.midfieldersCounter.value);
    const attackersCount = useSelector((state) => state.attackersCounter.value);
    const goalkeepersCount = useSelector((state) => state.goalkeepersCounter.value);

    const totalPlayers = defendersCount + midfieldersCount + attackersCount + goalkeepersCount;
    const dateNow = formatDate(new Date());

    const [inputName, setInputName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isValidTeam = () => {
        if (totalPlayers <= teamRequirements.maxPlayers
        && defendersCount >= teamRequirements.minDefenders
        && midfieldersCount >= teamRequirements.minMidfielders
        && attackersCount >= teamRequirements.minAttackers
        && goalkeepersCount >= teamRequirements.minGoalkeepers) {
            const teamObject = {
                name: inputName ? inputName : `Saved Team ${dateNow}`,
                id: (inputName ? inputName : `Saved Team ${dateNow}`) + dateNow,
                date: dateNow,
                playersData: playersData,
                defendersCount: defendersCount,
                midfieldersCount: midfieldersCount,
                attackersCount: attackersCount,
                goalkeepersCount: goalkeepersCount,
            }

            dispatch(saveTeam(teamObject))
            dispatch(setName(teamObject.name))
            navigate("/my-teams")
        }
        else {
            return setErrorMessage("TEAM COMPOSITION INVALID")
        }
    }

    return (
        <Popup trigger={open => (
            <button className="teamBar--save text--semibold">SAVE</button>)}
            modal
        >
            {close => (
            <div className="modal text--center">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="header text--semibold"> Save your team </div>
                    <div className="content text--small text--muted">
                    {' '}
                    Give your team a name!
                </div>

                <div className="text--small">
                    {dateNow}
                </div>


                    <input className="input" placeholder="Your team name" onChange={(e) => setInputName(e.target.value)} value={inputName}/>


                <div className="actions">
                    <button
                        className="button-save text--semibold"
                        onClick={() => {
                            isValidTeam();
                        }}
                        >
                        SAVE TEAM
                    </button>
                </div>

                <div className="error text--small text--bold">
                    {errorMessage}
                </div>
            </div>
            )}
        </Popup>
    )
}

export default ModalSaveTeam;
