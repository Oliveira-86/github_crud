import React from 'react';
import { User } from '../../../../core/types/User';
import './styles.scss';

type Props = {
    user: User;
}

const AvatarDetails = ({ user }:Props) => (

    <div className="main-container">
        <div className="avatar-container">
            <div className="avatar-details">
               <img src= {user.avatar_url} alt={user.name} className="avatar-img" />
                <div className="avatar-info">
                    <div className="header-info">
                        <ul className="list-info">
                            <li className="info-repo mr-2">
                                <h6 className="text-header">
                                    {user.public_repos}
                        </h6>
                            </li>
                            <li className="info-repo mr-2">
                                <h6 className="text-header">
                                    {user.followers}
                        </h6>
                            </li>
                            <li className="info-repo">
                                <h6 className="text-header">
                                    {user.following}
                        </h6>
                            </li>
                        </ul>
                    </div>
                    <div className="info-body">
                        <h3 className="info-title">
                            Informações
                </h3>
                        <div className="company-content">
                            <h3 className="company-text">
                                <b>Empresa:</b> {user.company}
                    </h3>
                        </div>
                        <div className="company-content">
                            <h3 className="company-text">
                                <b>Website/Blog:</b> {user.blog}
                    </h3>
                        </div>
                        <div className="company-content">
                            <h3 className="company-text">
                                <b>Localidade:</b> {user.location}
                    </h3>
                        </div>
                        <div className="company-content">
                            <h3 className="company-text">
                                <b>Membro desde:</b>{user.created_at}
                    </h3>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary button-info">
                    Ver Perfil
            </button>
        </div>
    </div>
);

export default AvatarDetails;