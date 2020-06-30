// == Import
import React from 'react';

// Import de la librairie Semantic UI
import { Card, Image } from 'semantic-ui-react';

// == Import PropTypes
import PropTypes from 'prop-types';

const Repository = ({
  image, title, organization, description,
}) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className="date">{organization}</span>
      </Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
);

// Utilisation de PropTypes
Repository.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Repository;
