/* eslint-disable import/no-unresolved */
// == Import
import React from 'react';

// == Import PropTypes
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Import Semantic UI
import { Card, Segment } from 'semantic-ui-react';

// == Import d'un composant
import Repository from 'src/components/Repository';


// == Composant
const List = ({ loading, results }) => {
  // Pour le moment on récupère que les noms de repos
  const resultsJSX = results.map((repo) => <Repository key={repo.id} {...repo} />);
  // On retourne le résultat qu'on veut récupérer
  return (
    <Segment loading={loading} className="repos-results">
      <Card.Group itemsPerRow={3} stackable>
        {resultsJSX}
      </Card.Group>
    </Segment>
  );
};

// Utilisation de PropTypes
List.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
};

// == Export
export default List;
