/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// == Import
import './styles.css';

// == Import de la BDD triée
import { realData } from 'src/utils/api';

// == Import des composants
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import List from 'src/components/List';

// == Import de React-router
import { useHistory } from 'react-router-dom';

// == Nécessaire pour l'utilisation de l'API
const API_GITHUB = 'https://api.github.com/search/repositories?q=';
const QUERY = 'react';

// == Composant
const App = () => {
  // Pour gérer l'état des repos
  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'UPDATE_QUERY': {
        return { ...state, query: action.payload };
      }
      case 'FETCH_REPOS': {
        return { ...state, loading: true };
      }
      case 'REPOS_RECEIVED': {
        return {
          ...state,
          repos: realData(action.payload.repos),
          loading: false,
          message: action.payload.message,
        };
      }
    }
  };

  // = Utilisation de useReducer pour gérer l'état de App
  const [state, dispatch] = useReducer(reducer, {
    // Liste des repos venant de l'API
    repos: [],
    // Input controlé par la recherche utilisateur dans l'API des repos
    loading: false,
    // Chargement asynchone des résultats => feedback visuel
    query: QUERY,
    // Message pour l'utilisateur
    message: '',
  });

  // Effet de Bord: récupération des repos depuis l'API
  const fetchRepos = () => {
    // On récupère une promesse
    // On lui passe query car ce sera son état initial
    const promise = axios.get(API_GITHUB + state.query);
    promise.then((response) => {
      // console.log(response);
      // setRepos(realData(response.data.items));
      dispatch({
        type: 'REPOS_RECEIVED',
        payload: {
          repos: response.data.items,
          message: `La recherche à trouvé un total de ${response.data.total_count} repos`,
        },
      });
    });
  };

  // Requête qui servira a récupérer la valeur de l'élément rentré par l'utilisateur
  const handleChange = (event) => {
    dispatch({ type: 'UPDATE_QUERY', payload: event.target.value });
  };
  const history = useHistory();
  // Nécessaire pour la soumission du formulaire
  const handleSubmit = (event) => {
    history.push(`/search/${state.query}`);
    // Pour éviter de recharger la page à la soumission du formulaire
    event.preventDefault();
    dispatch({ type: 'FETCH_REPOS' });
    fetchRepos();
  };

  useEffect(fetchRepos, []);

  // Premier test pour voir si on récupère les infos que l'on souhaite
  // console.log(realData);
  return (
    <div className="app">
      <Header />
      <SearchBar
        loading={state.loading}
        value={state.query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        message={state.message}
      />
      <List loading={state.loading} results={state.repos} />
    </div>
  );
};

// == Export
export default App;
