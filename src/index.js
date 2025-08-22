// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// if (!window.location.hash) {
//   window.location.replace(window.location.href + '#/');
// }
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const repoName = '/RajasthanMarbleHouse'; 

if (!window.location.hash) {
  const path = window.location.pathname.replace(repoName, '');
  window.history.replaceState(null, '', `${repoName}/#${path}`);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
