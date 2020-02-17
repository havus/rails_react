import React, { Fragment, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AlertTriangle } from 'react-feather';

import { requestQuestions } from '../../store/actions/question';

import Sidebar from '../../components/Sidebar';
import './style.scss';

const Home = props => {
  const { questions, requestQuestions } = props;

  const history = useHistory();

  function handleClick(id = 'new') {
    history.push(`/question/${id}`);
  }

  function getMarkStatus(str) {
    if (!str) return;
    return str.split(',')[0];
  }

  function getMarkUser(str) {
    if (!str) return;
    return str.split(',')[1];
  }

  useEffect(_ => {
    requestQuestions();
  }, [requestQuestions]);

  return (
    <Fragment>
      <div id="home">
        <Sidebar />

        <div className="container">
          <div className="sub-navigation p-3">
            <h1>Top Questions</h1>
            <button
              className="button blue"
              onClick={() => handleClick()}
            >
              Ask Question
            </button>
          </div>

          <div id="filter-question" className="p-3">
            pencarian
          </div>

          <div className="card-box mt-10">
            {questions.map((question, iQuestion) => (
              <div
                key={iQuestion}
                className="card justify-space-between pr-3"
              >
                <div className="card-body pr-5 flex flex-column">
                  <div className="title">
                    <h3 onClick={ () => handleClick(question.id) }>{ question.title }</h3>
                  </div>

                  <div className="summary flex justify-space-between">
                    <div className="tags mt-5">

                      {question.tags &&

                      question.tags.map((tag, iTag) => (
                        <div key={iTag} className="tag">{ tag }</div>
                      ))}

                    </div>
                    <div className="mark align-self-end">
                      <p>{ getMarkStatus(question.mark) }
                        <span className="ml-1">{ getMarkUser(question.mark) }</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="vote-box align-center">
                  <div className="votes p-3 flex flex-column align-center">
                    <span>{ question.votes }</span>
                    <span>votes</span>
                  </div>
                  <div className="answers p-3 flex flex-column align-center">
                    <span>{ question.answers }</span>
                    <span>answers</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-side">
          <div id="announcement">
            <div id="announcement_header">
              Pengumuman
            </div>
            <div id="announcement_body">
              <div className="announcement_list">
                <AlertTriangle size="20" className="icon"/>
                <p>Tolong untuk tidak disalah gunakan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  questions: state.questions,
});

const mapDispatchToProps = dispatch => ({
  requestQuestions: _ => dispatch(requestQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
