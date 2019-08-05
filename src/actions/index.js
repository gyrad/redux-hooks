import uuid from 'uuid';

import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER,
  RESET_COUNTER
} from './types';

export const increment = id => {
  return {
    type: INCREMENT,
    payload: id
  };
};

export const decrement = id => {
  return {
    type: DECREMENT,
    payload: id
  };
};

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
    payload: uuid()
  };
};

export const removeCounter = id => {
  return {
    type: REMOVE_COUNTER,
    payload: id
  };
};

export const resetCounter = id => {
  return {
    type: RESET_COUNTER,
    payload: id
  };
};
