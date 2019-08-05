import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER,
  RESET_COUNTER
} from '../actions/types';

const countersReducer = (counters = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [{ id: action.payload, count: 0 }, ...counters];
    case INCREMENT:
      return counters.map(counter => {
        if (counter.id === action.payload) {
          counter.count += 1;
        }
        return counter;
      });
    case DECREMENT:
      return counters.map(counter => {
        if (counter.id === action.payload) {
          counter.count -= 1;
        }
        return counter;
      });
    case REMOVE_COUNTER:
      return counters.filter(counter => counter.id !== action.payload);
    case RESET_COUNTER:
      return counters.map(counter => {
        if (counter.id === action.payload) {
          counter.count = 0;
        }
        return counter;
      });
    default:
      return counters;
  }
};

export default countersReducer;
