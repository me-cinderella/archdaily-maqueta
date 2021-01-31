import React from 'react';
import MenuSuperior from './MenuSuperior';
import MenuInferior from './MenuInferior';
import Logo from './Logo';
import Login from './Login';
import SearchBar from './SearchBar';

function CustomHeader() {
    return (
        <div>
            <div className="sup-header-container">
                <MenuSuperior />
                <Logo />
                <Login />
            </div>
            <div className="sub-header-container">
                <MenuInferior />
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    );
}

export default CustomHeader;