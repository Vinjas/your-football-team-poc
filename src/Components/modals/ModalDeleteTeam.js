import Popup from "reactjs-popup"
import { useDispatch } from "react-redux";

import { deleteTeam } from "../../redux/reducers/savedTeamsSlice";

const ModalDeleteTeam = (props) => {
    const dispatch = useDispatch();

    return (
        <Popup trigger={open => (
            <button className="button-delete text--semibold">DELETE</button>)}
            modal
        >
            {close => (
            <div className="modal text--center">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="header text--semibold"> Delete team? </div>
                    <div className="content text--small text--muted">
                    {' '}
                    Are you sure you want to delete your team?
                </div>


                <div className="actions">
                    <button
                        className="button-delete-modal"
                        onClick={() => dispatch(deleteTeam(props.teamID))}
                        >
                        DELETE TEAM
                    </button>
                </div>
            </div>
            )}
        </Popup>
    )
}

export default ModalDeleteTeam;
