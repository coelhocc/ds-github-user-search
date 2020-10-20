import Button from 'core/components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Search = () => {
  return (
    <div className="search-div-container">
      <div className="search-box-content">
        <h1 className="search-title">
          Encontre um perfil Github
        </h1>
        <input 
          className="search-input"
          placeholder="  Usuário Github" 
        />
        <br/>
        <Button text="Encontrar" />
      </div>
    </div>
  )
}

export default Search;