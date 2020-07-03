import React from 'react';

import IsExternal from '../../components/IsExternal';

import './App.scss';

const App = () => {
  return (
    <div className="container app">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron bg-secondary text-white text-center">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <h1 className="display-4">Bag Of Holding</h1>
              </div>
            </div>
            <p className="lead">
              A magical grab bag of useful tools for the discerning developer
            </p>
            <hr className="my-4" />
            <p>
              On this page you will find interactive examples. Please consult
              the documentation for further details and a tutorial.
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="btn btn-dark btn-lg"
                  href="https://github.com/PenguinOfWar/reducks-redux-queue"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Documentation
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-dark btn-lg"
                  href="https://github.com/PenguinOfWar/reducks-redux-queue/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <IsExternal />
      </div>
    </div>
  );
};

export default App;
