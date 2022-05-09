import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './assets/scss/globalStyles.scss';
import 'antd/dist/antd.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
