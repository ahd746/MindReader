import React, { useState } from 'react';
import cardContext from './context/cardContext'
import './App.css'
import Card from './components/Card';

function App() {
  const [sum, setSum] = useState(0);
  const [toggle, setToggle] = useState(false);
  let msg = "Read My Mind";
  if (sum > 60 || sum < 1) {
    msg = "choose a number from 1 to 60"
  } else {
    msg = `You choosed ${sum}`;
  }

  return (
    <cardContext.Provider value={{ sum, setSum, toggle, setToggle }} >
      <div className="container">
        <h1>Mind Reader Game</h1  >
        <h3>Choose a number from 1 and 60 and press on the tables that contain it</h3>
        <div className="row mt-4">
          <div className="col-lg" >
            <Card binaryNumber={1} />
          </div>
          <div className="col-lg" >
            <Card binaryNumber={4} />
          </div>
          <div className="col-lg" >
            <Card binaryNumber={3} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg" >
            <Card binaryNumber={2} />
          </div>
          <div className="col-lg" >
            <Card binaryNumber={6} />
          </div>
          <div className="col-lg" >
            <Card binaryNumber={5} />
          </div>
        </div>
        <div className="mt-4" >
          <button
            className="d-inline mb-5"
            onClick={() => {
              setToggle(!toggle)
            }}>
            Read My Mind
          </button>
          <p className={toggle ? 'd-inline font-weight-bold ml-3' : 'd-none font-weight-bold ml-3'}>
            {msg}
          </p>
        </div>
      </div>
    </cardContext.Provider >
  );
}

export default App;
