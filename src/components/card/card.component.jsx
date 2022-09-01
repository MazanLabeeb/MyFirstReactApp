import "./card.style.css";
import { Component } from "react";

const Card = ({user}) => {
    const { id, name, email } = user;
    return (
        <div key={id} className="card">
            <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`profile ${name}`} />
            <h5>{name}</h5>
            <p>{email}</p>
        </div>
    );
}

export default Card;