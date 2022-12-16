import "./card-list.styles.css";
import Card from "../card/card.component";
import { TUsers } from '../../App';

type CardListProps = {
    filteredUsers: TUsers[]
}

const CardList = ({ filteredUsers }: CardListProps) => (
    <div className={"cards-container"} >
        {filteredUsers.map(user => {
            return (
                <Card key={user.name} user={user} />
            );
        })}
    </div>

)

export default CardList;