import { useNavigate } from "react-router-dom";

const TeamCard = (props) => {
    const navigation = useNavigate();

    return (
        <div className="teamCard" onClick={() => navigation(`/teams/${props.id}`)}>
            <img className="teamCard--img" src={props.img} alt={props.name}></img>

            <div className="text--medium text--semibold text--muted text--center">{props.name}</div>
        </div>
    )
}

export default TeamCard;
