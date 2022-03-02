const PlayerCard = (props) => {
    return (
        <div>
            <div>
                <strong>{props.name}</strong>
            </div>
            <div>
                {props.position}
            </div>
        </div>
    )
}

export default PlayerCard;