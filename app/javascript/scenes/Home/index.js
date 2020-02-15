import React, { Fragment, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './style.scss';

const Home = props => {
  const { questions, requestQuestions } = props;

  const history = useHistory();

  function handleClick(id = 'new') {
    history.push(`/question/${id}`);
  }

  function getMarkStatus(str) {
    console.log(str);
    if (!str) return;
    return str.split(',')[0];
  }

  function getMarkUser(str) {
    if (!str) return;
    return str.split(',')[1];
  }

  useEffect(_ => {
    requestQuestions();
  }, []);

  useEffect(_ => {
    console.log(questions);
  }, [questions]);

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
              onClick={() => handleClick()}
            >
              Ask Question
            </button>
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
          <p>right side</p>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  questions: state.questions,
});

import { requestQuestions } from '../../store/actions/question';

const mapDispatchToProps = dispatch => ({
  requestQuestions: _ => dispatch(requestQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
