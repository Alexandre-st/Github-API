/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import { render } from 'react-dom';
// Import de Sémantic UI
import 'semantic-ui-css/semantic.min.css';

// == Import de react-router
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import App from 'src/components/App';

// == Render
const rootReactElement = <Router><App /></Router>;
const target = document.getElementById('root');
render(rootReactElement, target);
