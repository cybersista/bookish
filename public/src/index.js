import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppAdmin from './Admins.jsx';
import AppUsers from './Members.jsx';
import './index.css';

const isAdmin = false; // Ganti dengan logika penentuan admin atau user

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    {isAdmin ? <AppAdmin /> : <AppUsers />}
  </React.StrictMode>
);
