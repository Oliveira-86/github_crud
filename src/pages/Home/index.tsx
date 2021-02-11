import React from 'react';
import './styles.scss'

const Home = () => (
    <div className="home-container">
        
            <h1 className="text-title"> 
                Desafio do Capítulo 3, Bootcamp DevSuperior
            </h1>
            <p className="text-subtitle"> 
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
            </p>
            <button className="btn btn-primary button-home">
                <h4 className="button-text">
                    Começar
                </h4>
            </button>
        
    </div>
);

export default Home;