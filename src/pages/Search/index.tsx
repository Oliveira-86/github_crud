import React from 'react';
import AvatarDetails from './components/AvatarDetails';
import './styles.scss';

const Search = () => (
    <div className="search-container">
        <div className="search-content">
            <h2 className="search-title">
                Encontre um perfil Github
            </h2>
            <input type="text" className="search-input" />
            <button className="btn btn-primary button-search">
                Encontrar
            </button>
        </div>
        <div className="avatar-container">
            <AvatarDetails />
        </div>

    </div>
);

export default Search;