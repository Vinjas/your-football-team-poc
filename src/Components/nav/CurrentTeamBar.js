import { useSelector } from "react-redux";
import { teamRequirements } from "../../utils/teamRequirements";

import 'reactjs-popup/dist/index.css';

import ModalSaveTeam from "../modals/ModalSaveTeam";

const CurrentTeamBar = () => {
    const defendersCount = useSelector((state) => state.defendersCounter.value);
    const midfieldersCount = useSelector((state) => state.midfieldersCounter.value);
    const attackersCount = useSelector((state) => state.attackersCounter.value);
    const goalkeepersCount = useSelector((state) => state.goalkeepersCounter.value);

    const totalPlayers = defendersCount + midfieldersCount + attackersCount + goalkeepersCount;

    return (
        <div className="teamBar text--semibold text--small">
            <div>
                <div>
                    Defenders: {defendersCount}/{teamRequirements.minDefenders}
                </div>
                <div>
                    Midfielders: {midfieldersCount}/{teamRequirements.minMidfielders}
                </div>
            </div>

            <div>
                <div>
                    Attackers: {attackersCount}/{teamRequirements.minAttackers}
                </div>
                <div>
                    Goalkeepers: {goalkeepersCount}/{teamRequirements.minGoalkeepers}
                </div>
            </div>
            <div>
                Total: {totalPlayers}/{teamRequirements.maxPlayers}
            </div>

            <ModalSaveTeam />

        </div>
    )
}

export default CurrentTeamBar;
