import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app/library/styles/master.scss';
import reportWebVitals from './reportWebVitals';

/* Modules */
import Dashboard from './app/modules/dashboard';

const PageNotFound = () => {
  return (
    <h1>Page Not Found</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
