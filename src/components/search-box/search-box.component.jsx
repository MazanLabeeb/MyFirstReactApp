import { Component } from "react";

class SearchBox extends Component {
    render() {
        const {username, onSearchHandler, className, placeholder}= this.props;

        return (
            <div>
                <h1>Monsters Rolodex  - {username}</h1>
                <input type="search" className={className} placeholder={placeholder} onChange={onSearchHandler} />
                <br />
                <br />
                <hr />
            </div>
        );
    }
}

export default SearchBox;