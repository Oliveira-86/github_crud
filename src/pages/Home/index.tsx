import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        
            <h1 className="text-title"> 
                Desafio do Capítulo 3,<br/> Bootcamp DevSuperior
            </h1>
            <p className="text-subtitle"> 
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/> 
                Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
            </p>
            <Link to="/searches">
                <button className="btn btn-primary button-home">
                    <h4 className="button-text">
                        Começar
                    </h4>
                </button>
            </Link>
    </div>
);

export default Home;