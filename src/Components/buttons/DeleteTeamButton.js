import ModalDeleteTeam from "../modals/ModalDeleteTeam";

const DeleteTeamButton = (props) => {
    return (
        <div>
            <ModalDeleteTeam teamID={props.team.id} />
        </div>
    )
}

export default DeleteTeamButton;
