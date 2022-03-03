import LoadTeamButton from "./buttons/LoadTeamButton";

const SavedTeam = (props) => {
    return (
        <div>
            <div>
                <h2>{props.name}</h2>

                {props.playersData.map((player) => {
                    return (
                        <div>{player.name}</div>
                    )
                })}
            </div>

            <LoadTeamButton team={props} />
        </div>
    )
}

export default SavedTeam;
