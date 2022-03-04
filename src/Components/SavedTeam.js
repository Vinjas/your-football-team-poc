import DeleteTeamButton from "./buttons/DeleteTeamButton";
import LoadTeamButton from "./buttons/LoadTeamButton";

const SavedTeam = (props) => {
    return (
        <div className="savedTeamCard">
            <div>
                <h2 className="text--center">{props.name}</h2>

                <div className="savedTeamCard--players-column savedTeamCard--textleft">
                    <div className="text--smaller text--muted">
                        <div className="text--semibold">Defenders</div>

                        <div className="savedTeamCard--players">
                            {props.playersData.map((player, idx) => {
                                if (player.position === "Defender") {
                                    return (
                                        <div key={player.name}>{player.name}</div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="text--smaller text--muted savedTeamCard--textright">
                        <div className=" text--semibold">Attakers</div>

                        <div className="savedTeamCard--players">
                            {props.playersData.map((player, idx) => {
                                if (player.position === "Attacker") {
                                    return (
                                        <div key={player.name}>{player.name}</div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>

                <div className="savedTeamCard--players-column">
                    <div className="text--smaller text--muted savedTeamCard--textleft">
                        <div className="text--semibold">Midfielders</div>

                        <div className="savedTeamCard--players">
                            {props.playersData.map((player, idx) => {
                                if (player.position === "Midfielder") {
                                    return (
                                        <div key={player.name}>{player.name}</div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="text--smaller text--muted savedTeamCard--textright">
                        <div className="text--semibold">Goalkeepers</div>

                        <div className="savedTeamCard--players">
                            {props.playersData.map((player, idx) => {
                                if (player.position === "Goalkeeper") {
                                    return (
                                        <div key={player.name}>{player.name}</div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>



            </div>

            <div className="savedTeamCard--buttons">
                <LoadTeamButton team={props} />
                <DeleteTeamButton team={props}/>
            </div>
        </div>
    )
}

export default SavedTeam;
