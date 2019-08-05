import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../Counter/Counter';
import { addCounter } from '../../actions';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const counters = useSelector(state => state.counters);

  const addCounterHandler = () => {
    dispatch(addCounter());
  };

  const renderCounters = counters.map(counter => (
    <Counter key={counter.id} id={counter.id} count={counter.count} />
  ));

  return (
    <div className="App">
      <div className="App__header">
        <h1> Counter App</h1>
        <button className="App__add-counter-btn" onClick={addCounterHandler}>
          + Add Counter
        </button>
      </div>
      {renderCounters}
    </div>
  );
};

export default App;
