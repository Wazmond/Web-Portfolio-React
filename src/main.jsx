import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import NavBar from './NavBar2';
import Page from './Page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Page />
  </React.StrictMode>,
);