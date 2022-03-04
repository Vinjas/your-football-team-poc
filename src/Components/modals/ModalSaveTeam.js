import Popup from "reactjs-popup"
import { useSelector, useDispatch } from "react-redux";
import { teamRequirements } from "../../utils/teamRequirements";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { saveTeam } from "../../redux/reducers/savedTeamsSlice";
import { formatDate } from "../../utils/formatDate";

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

    const isValidTeam = () => {
        if (totalPlayers <= teamRequirements.maxPlayers
        && defendersCount >= teamRequirements.minDefenders
        && midfieldersCount >= teamRequirements.minMidfielders
        && attackersCount >= teamRequirements.minAttackers
        && goalkeepersCount >= teamRequirements.minGoalkeepers) {
            alert("SUCCESS: TEAM SAVED")

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
            navigate("/")
        }
        else {
            return alert("ERROR: TEAM COMPOSITION INVALID")
        }
    }

    return (
        <Popup trigger={open => (
            <button className="button">SAVE TEAM</button>)}
            modal
        >
            {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="header"> Save your team </div>
                    <div className="content">
                    {' '}
                    Give your team a name!
                </div>

                <div>
                    {dateNow}
                </div>

                <div>
                    <input onChange={(e) => setInputName(e.target.value)} value={inputName}/>
                </div>

                <div className="actions">
                    <button
                        className="button"
                        onClick={() => isValidTeam()}
                        >
                        SAVE TEAM
                    </button>
                </div>
            </div>
            )}
        </Popup>
    )
}

export default ModalSaveTeam;
