import Button from 'core/components/Button';
import React from 'react';
import './styles.scss'

const Home = () => {
  return (
    <div className="div-container">
      <h1 className="home-title">
        Desafio do Capítulo 3, Bootcamp DevSuperior
      </h1>
      <div className="home-content">
        <h6 className="home-content-line">
          Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
        </h6>
        <h6 className="home-content-line">
          Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
        </h6>
        <h6 className="home-content-line">
          Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: 
          <a href="mailto:antforfigma@gmail.com"> antforfigma@gmail.com</a>
        </h6>
      </div>
      <div className="button-div">
        <Button text="Começar" />
      </div>
    </div>
  );
}

export default Home;