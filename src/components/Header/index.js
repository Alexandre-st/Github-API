/* eslint-disable import/no-unresolved */

// == Import
import React from 'react';
import image from 'src/assets/images/logo-github.png';

// == Composant
const Header = () => (
  <div className="header">
    <img src={image} alt="Logo de GitHub" />
  </div>
);

// == Export
export default Header;
