import React from 'react';
import { useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  removeCounter,
  resetCounter
} from '../../actions';

import './Counter.scss';

const Counter = ({ id, count }) => {
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <button
        className="Counter__set-btn"
        onClick={() => dispatch(decrement(id))}
      >
        <span> - </span>
      </button>
      <span className="Counter__number">&nbsp;{count}&nbsp;</span>
      <button
        className="Counter__set-btn"
        onClick={() => dispatch(increment(id))}
      >
        <span> + </span>
      </button>
      <div className="Counter__action-btns">
        <button className="vertical-dots-btn">
          <span>&#8942;</span>
          <ul>
            <li
              onClick={() => {
                dispatch(resetCounter(id));
                document.activeElement.blur();
              }}
            >
              Reset Counter
            </li>
            <li onClick={() => dispatch(removeCounter(id))}>Delete Counter</li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default Counter;
