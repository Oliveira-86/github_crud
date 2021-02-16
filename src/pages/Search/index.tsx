
import React, { useState } from 'react';
import { User } from '../../core/types/User';
import { makeResquest } from '../../core/utils/request';
import AvatarDetails from './components/AvatarDetails';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.scss';



const Search = () => {
    const [login, setLogin] = useState('');
    const [user, setUser] = useState<User>();
    const [isloader, setIsLoader] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoader(true);
        makeResquest({ url: `/${login}` })
            .then(userResponse => setUser(userResponse.data))
            .finally(() => setIsLoader(false));
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
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
                
                    {isloader && <ImageLoader />} {isloader && <InfoLoader />}
                    {!isloader && (
                        user &&
                        (<div >
                            <AvatarDetails user={user} />
                        </div>)
                    )}               
            </div>
        </form>
    );
}

export default Search;