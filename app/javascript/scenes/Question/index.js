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

        <div class="container">
          <div class="container-body">
            <div class="sub-navigation mb-2">
              <h1 v-if="isNewQuestion">Tanya ke temen-temen yuks</h1>
              <h1 v-if="!isNewQuestion">Question</h1>
              <button
                class="button circle blue"
                onClick={handleClickBack}
              >
                Back
              </button>
            </div>

            <h5 class="mb-1 mt-7">Judul</h5>
            <input type="text" class="rounded"/>

            <h5 class="mb-1 mt-3">Konten</h5>
            <textarea name="form[new-question]" class="rounded" id="" rows="10"/>

            <div class="footer mt-3 flex justify-space-between">
              <div id="hint-question">
                <p>* Beritahu apa yang kamu inginkan</p>
                <p>* Beritahu apa yang telah kamu coba</p>
                <p>* Beritahu error yang kamu temui</p>
              </div>

              <div class="btn-wrap">
                <button
                  class="button circle blue"
                >
                  Tanya
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="right-side"/>
      </div>
    </Fragment>
  )
}

export default Question;
