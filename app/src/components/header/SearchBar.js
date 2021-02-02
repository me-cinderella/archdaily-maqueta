import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg';

function SearchBar() {
    return (
        <form className="search-bar">
            <SearchIcon />    
            <input placeholder="Search ArchDaily"></input>
        </form>
    );
}

export default SearchBar;