import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg';

function MobileHeader() {
    return (
        <div className="mobile-header">
            <div className="search-bar mobile-search">
                <SearchIcon />    
                <input placeholder="Search ArchDaily"></input>
            </div>
            <div className="hamburger-menu mobile-hamburger-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default MobileHeader;