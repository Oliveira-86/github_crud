import React from 'react';
import { ReactComponent as AvatarImg } from '../../../../core/assets/image/profile.svg'
import './styles.scss';

const AvatarDetails = () => (

   <div className="avatar-details">
       <AvatarImg />
       <div className="avatar-info">
            <div className="header-info">
                <ul className="list-info">
                    <li className="info-repo mr-2">
                        <h6 className="text-header">
                            Repositórios públicos: 62
                        </h6>
                    </li>
                    <li className="info-repo mr-2">
                        <h6 className="text-header">
                            Seguidores: 127
                        </h6>
                    </li>
                    <li className="info-repo">
                        <h6 className="text-header">
                            Seguindo: 416   
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
                        <b>Empresa:</b> @ZupIT 
                    </h3>
                </div>
                <div className="company-content">
                    <h3 className="company-text">
                       <b>Website/Blog:</b>  https://thewashington.dev 
                    </h3>
                </div>
                <div className="company-content">
                    <h3 className="company-text">
                        <b>Localidade:</b> Uberlândia 
                    </h3>
                </div>
                <div className="company-content">
                    <h3 className="company-text">
                        <b>Membro desde:</b> 19/10/2013 
                    </h3>
                </div>
            </div>
            <button className="btn btn-primary button-info">
                Ver Perfil
            </button>
       </div>
       
   </div>
);

export default AvatarDetails;