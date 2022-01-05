import { CounterAction, CounterActionTypes } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { changes, counter, previous } = state;

  switch (action.type) {
    case CounterActionTypes.reset:
      if (previous === 0 && counter === 0 && changes === 0) return state;

      return {
        changes: 0,
        counter: 0,
        previous: 0,
      };

    case CounterActionTypes.increaseBy:
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter,
      };

    default:
      return state;
  }
};
