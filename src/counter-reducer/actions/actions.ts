// const actions = {
//   counterReset: 'reset'
// }

export enum CounterActionTypes {
  increaseBy = "increaseBasdfasdfasy",
  reset = "reset",
}

export type CounterAction =
  | { type: CounterActionTypes.increaseBy; payload: { value: number } }
  | { type: CounterActionTypes.reset };

export const doReset = (): CounterAction => ({
  type: CounterActionTypes.reset,
});

export const doIncreaseBy = (value: number): CounterAction => ({
  type: CounterActionTypes.increaseBy,
  payload: { value },
});
