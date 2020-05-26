import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import ChildrenDetails from './components/ChildrenDetails';
import ParentDetails from './components/ParentDetails';
import Approved from './components/Approved';
import Login from './components/admin pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fullPage">
      <Header />
      <ChildrenDetails />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
