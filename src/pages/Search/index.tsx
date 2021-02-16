import React, { useState } from 'react';
import { User } from '../../core/types/User';
import { makeResquest } from '../../core/utils/request';
import AvatarDetails from './components/AvatarDetails';
import './styles.scss';



const Search = () => {
    const [login, setLogin] = useState('');
    const [user, setUser] = useState<User>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            login
        }

    makeResquest({ url: `/${login}`, method: 'GET', data: payload })
        .then(response => setUser(response.data));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-container">
                <div className="search-content">
                    <h2 className="search-title">
                        Encontre um perfil Github
                </h2>
                    <input
                        value={login}
                        type="text"
                        className="search-input"
                        onChange={handleOnChange}
                        placeholder="Usuário Github"
                    />
                    <button
                        className="btn btn-primary button-search"
                    >
                        Encontrar
                </button>
                </div>
                <div >
                    <AvatarDetails user={user?.login} />
                </div>

            </div>
        </form>
    );
}

export default Search;