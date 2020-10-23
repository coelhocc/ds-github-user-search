import React, { useState } from 'react';
import Button from 'core/components/Button';
import './styles.scss';
import axios from 'axios';
import ImageLoader from './components/Loaders/ImageLoader';
import { GithubDetails } from 'core/Type/GitHubDetails';
import MiniLabel from 'core/components/MiniLabel';
import Label from 'core/components/Label';
import { Link } from 'react-router-dom';
import InfoLoader from './components/Loaders/InfoLoader';

const Search = () => {

  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState<GithubDetails>();
  const [isLoading, setIsLoading] = useState(false);

  type FormEvent = React.ChangeEvent<HTMLInputElement>;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios(`https://api.github.com/users/${search}`)
      .then(userResponse => setUserData(userResponse.data))
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleOnChange = (event: FormEvent) => {
    setSearch(event.target.value)
  }

  return (
    <div className="search-div-container">
      <div className="search-box-content">
        <h1 className="search-title">
          Encontre um perfil Github
        </h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input 
            type="text"
            className="search-input"
            placeholder="  Usuário Github" 
            required
            value={search}
            onChange={handleOnChange}
          />
          <br/>
          <Button text="Encontrar" />
        </form>
      </div>
      {!userData ? <></> : <div className="result-div-container">
        {isLoading ? <ImageLoader /> : 
          <div>
              <img 
                src={userData?.avatar_url}
                alt="coelhocc"
                className="git-avatar"
              />
            <br/>
            <Link to={`https://api.github.com/users/${search}`}>
              <Button text="Ver perfil" />
            </Link>
          </div>
        }
        {isLoading ? <InfoLoader /> : (
          <div className="result-git-div-content">
            <div className="result-git-div-header">
              <MiniLabel label="Relatórios públicos" value={userData?.public_repos} />
              <MiniLabel label="Seguidores" value={userData?.followers} />
              <MiniLabel label="Seguindo" value={userData?.following} />
            </div>
                <div className="result-git-div-datails">
                  <h1 className="result-git-title">Informações</h1>
                  <Label label="Empresa" value={userData?.company} />
                  <Label label="Website/Blog" value={userData?.blog} />
                  <Label label="Localidade" value={userData?.location} />
                  <Label label="Membro desde" value={userData?.created_at} />
                </div>
            </div>
          )}
      </div>
      }
    </div>
  )
}

export default Search;