// == Import
import React from 'react';

// == Import Semantic UI
import { Form, Segment, Input } from 'semantic-ui-react';

// == Import PropTypes
import PropTypes from 'prop-types';

// == Composant
const SearchBar = ({
  loading, value, handleChange, handleSubmit, message,
}) => (
  <Segment>
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          loading={loading}
          iconPosition="left"
          icon="search"
          placeholder="Search"
            // On force l'affichage de la valeur
          value={value}
            // Modification de la valeur (pour plus tard)
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
    <Segment>{message}</Segment>
  </Segment>
);

// PropTypes s'utilise sur les props,
// pour pouvoir confirmer leur type
SearchBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

// == Export
export default SearchBar;
