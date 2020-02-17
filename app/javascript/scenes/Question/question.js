import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';

import './question.scss';

const Question = _ => {
  const history = useHistory();

  function handleClickBack() {
    history.push('/');
  }

  return (
    <Fragment>
      <div id="question">
        <Sidebar />

        <div className="container">
          <div className="container-body">
            <div className="sub-navigation mb-2">
              <h1>Question</h1>
              <button
                className="button blue"
                onClick={handleClickBack}
              >
                Back
              </button>
            </div>

          </div>
        </div>

        <div className="right-side"/>
      </div>
    </Fragment>
  );
};

export default Question;
