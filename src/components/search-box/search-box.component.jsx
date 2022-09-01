import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
    render() {
        const {username, onSearchHandler, className, placeholder}= this.props;

        return (
            <div className={"header"}>
                <h1>Monsters Rolodex  - {username}</h1>
                <input type="search" className={className} placeholder={placeholder} onChange={onSearchHandler} />
            </div>
        );
    }
}

export default SearchBox;