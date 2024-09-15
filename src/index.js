import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store.jsx';
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App cardInfo={store.cardInfo} steps={store.steps} history={store.history} testimonials={store.testimonials}/>
    <Analytics/>
  </React.StrictMode>
);

reportWebVitals();
