import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import './style.scss';

const Question = _ => {
  const history = useHistory();

  function handleClickBack() {
    history.push("/");
  }

  return (
    <Fragment>
      <Navbar />

      <div id="question">
        <Sidebar />

        <div className="container">
          <div className="container-body">
            <div className="sub-navigation mb-2">
              <h1>Tanya ke temen-temen yuks</h1>
              <h1>Question</h1>
              <button
                className="button circle blue"
                onClick={handleClickBack}
              >
                Back
              </button>
            </div>

            <h5 className="mb-1 mt-7">Judul</h5>
            <input type="text" className="rounded"/>

            <h5 className="mb-1 mt-3">Konten</h5>
            <textarea name="form[new-question]" className="rounded" id="" rows="10"/>

            <div className="footer mt-3 flex justify-space-between">
              <div id="hint-question">
                <p>* Beritahu apa yang kamu inginkan</p>
                <p>* Beritahu apa yang telah kamu coba</p>
                <p>* Beritahu error yang kamu temui</p>
              </div>

              <div className="btn-wrap">
                <button
                  className="button circle blue"
                >
                  Tanya
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side"/>
      </div>
    </Fragment>
  )
}

export default Question;
