import Popup from "reactjs-popup"
import { useDispatch } from "react-redux";

import { deleteTeam } from "../../redux/reducers/savedTeamsSlice";

const ModalDeleteTeam = (props) => {
    const dispatch = useDispatch();

    return (
        <Popup trigger={open => (
            <button className="button">DELETE TEAM</button>)}
            modal
        >
            {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="header"> DELETE TEAM </div>
                    <div className="content">
                    {' '}
                    Are you sure you want to delete your team?
                </div>


                <div className="actions">
                    <button
                        className="button"
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
