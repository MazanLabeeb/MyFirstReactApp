import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {

    render() {
        const { filteredUsers } = this.props;
        // console.log(name);
        return (
            <div className={"cards-container"} >
                {filteredUsers.map(user => {
                    return (
                        <Card key={user.name} user={user} />
                    );
                })}
            </div>

        )
    }
}

export default CardList;