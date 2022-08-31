import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {

    render() {
        const { filteredUsers } = this.props;
        // console.log(name);
        return (
            filteredUsers.map(user => {
                const {id, name, email} =user;
                return (
                    <div key={id} className="card">
                        <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`profile ${name}`} />
                        <h5>{name}</h5>
                        <p>{email}</p>
                    </div>
                    
                );
            })
        )
    }
}

export default CardList;