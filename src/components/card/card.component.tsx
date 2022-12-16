import "./card.style.css";
import { TUsers } from "../../App";

type CardProps = {
    user: TUsers;
}
const Card = ({ user }: CardProps) => {
    const { id, name, email } = user;
    // if(!name){console.log("dj")}

    return (
        <div key={id} className="card">
            <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`profile ${name}`} />
            <h5>{name}</h5>
            <p>{email}</p>
        </div>
    );
}

export default Card;