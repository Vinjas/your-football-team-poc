import { useDispatch } from "react-redux";

import { deleteTeam } from "../../redux/reducers/savedTeamsSlice";
import ModalDeleteTeam from "../modals/ModalDeleteTeam";

const DeleteTeamButton = (props) => {
    const dispatch = useDispatch();

    return (
        <div>
            <ModalDeleteTeam teamID={props.team.id} />
        </div>
    )
}

export default DeleteTeamButton;
