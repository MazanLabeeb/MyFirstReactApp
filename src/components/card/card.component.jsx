import "./card.style.css";
import { Component } from "react";

class Card extends Component {
    render() {
        const {id, name, email} =this.props.user;
        return (

            <div className="card">
                <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`profile ${name}`} />
                <h5>{name}</h5>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;