import DeleteTeamButton from "./buttons/DeleteTeamButton";
import LoadTeamButton from "./buttons/LoadTeamButton";

const SavedTeam = (props) => {
    return (
        <div>
            <div>
                <h2>{props.name}</h2>

                {props.playersData.map((player, idx) => {
                    return (
                        <div key={player.name}>{player.name}</div>
                    )
                })}
            </div>

            <LoadTeamButton team={props} />
            <DeleteTeamButton team={props}/>
        </div>
    )
}

export default SavedTeam;
