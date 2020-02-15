import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import './style.scss';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Home = _ => {
  const history = useHistory();

  function handleClick() {
    history.push("/question");
  }

  return (
    <Fragment>
      <Navbar />

      <div id="home">
        <Sidebar />

        <div className="container">
          <h1>Hello Gaes</h1>
          <h1>Welkem bek to mai cenel!</h1>
          <div className="sub-navigation">
            <button
              className="button circle blue"
              onClick={handleClick}
            >
              Ask Question
            </button>
          </div>

          <div className="card-box mt-10">
            <div className="card justify-space-between pr-3">
              <div className="card-body pr-5 flex flex-column">
                <div className="title">
                  <h3>title</h3>
                </div>

                <div className="summary flex justify-space-between">
                  <div className="tags mt-5">
                    <div 
                      className="tag"
                    >
                      tag
                    </div>
                  </div>
                  <div className="mark align-self-end">
                    <p>mark
                      <span>user</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="vote-box align-center">
                <div className="votes p-3 flex flex-column align-center">
                  <span>10</span>
                  <span>votes</span>
                </div>
                <div className="answers p-3 flex flex-column align-center">
                  <span>12</span>
                  <span>answers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <p>right side</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;
