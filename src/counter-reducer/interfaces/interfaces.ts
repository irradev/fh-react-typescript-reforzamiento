export interface CounterProps {
  initialValue?: number;
}

export interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}
