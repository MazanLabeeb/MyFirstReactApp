import { Component } from "react";
import "./search-box.style.css";

const SearchBox = ({ onSearchHandler, className, placeholder }) =>(
    <div className={"header"}>
        <h1>My First React App </h1>
        <input type="search" className={className} placeholder={placeholder} onChange={onSearchHandler} />
    </div>
);


export default SearchBox;