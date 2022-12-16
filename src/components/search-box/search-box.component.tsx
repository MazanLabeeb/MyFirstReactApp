import { ChangeEventHandler } from "react";
import "./search-box.style.css";

type SearchBoxProps = {
    onSearchHandler: ChangeEventHandler<HTMLInputElement>
    className: string;
    placeholder: string;
}

const SearchBox = ({ onSearchHandler, className, placeholder }: SearchBoxProps) => (
    <div className={"header"}>
        <h1>My First React App with TS</h1>
        <input type="search" className={className} placeholder={placeholder} onChange={onSearchHandler} />
    </div>
);

export default SearchBox;