import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { AlertTriangle } from 'react-feather';
import Footer from '../../components/Footer';

import './new-question.scss';

const Question = _ => {
  const history = useHistory();

  function handleClickBack() {
    history.push('/');
  }

  return (
    <div id="new-question">
      <div className="container">
        <div className="main-content">
          <div id="ask-question-box">
            <div id="ask-question-box__sub-navigation">
              <h1>Tanyakan pertanyaan baru</h1>

              <button
                className="button blue"
                onClick={handleClickBack}
              >
                Back
              </button>
            </div>

            <div id="ask-question-box__title">
              <h5 className="mb-1 mt-7">Judul</h5>
              <input type="text" className="rounded"/>
            </div>

            <div id="ask-question-box__content">
              <h5 className="mb-1 mt-3">Konten</h5>
              <textarea name="form[new-question]" className="rounded" id="" rows="10"/>
            </div>

            <div id="ask-question-box__footer">
              <div id="hint-question">
                <p>* Beritahu apa yang kamu inginkan</p>
                <p>* Beritahu apa yang telah kamu coba</p>
                <p>* Beritahu error yang kamu temui</p>
              </div>

              <div className="btn-wrap">
                <button
                  className="button blue"
                >
                  Tanya
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div id="new-question-note">
            <div id="new-question-note__header">
              Pengumuman
            </div>
            <div id="new-question-note__body">
              <div id="new-question-note__list">
                <AlertTriangle size="20" className="icon"/>
                <p>Tolong untuk tidak disalah gunakan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Question;
