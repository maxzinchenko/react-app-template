import React from 'react';

import './style.css';

import { ErrorBoundary } from './error';
import { Routes } from './routes';

export const App = () => (
  <ErrorBoundary>
    <Routes/>
  </ErrorBoundary>
);
