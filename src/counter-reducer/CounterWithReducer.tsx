import { useReducer } from "react"
import { CounterProps } from "./interfaces/interfaces";
import { counterReducer, INITIAL_STATE } from "./state/counterReducer";
import * as actions from './actions/actions';


export const CounterWithReducer = ({initialValue = 0}: CounterProps) => {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)  

  const increaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value));
  }

  return (
    <>
      <h1>Counter Reducer Segmentado:</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button
      onClick={() => increaseBy(1)}
      >
        +1
      </button>
      <button
      onClick={() => increaseBy(5)}
      >
        +5
      </button> 
      <button
      onClick={() => increaseBy(10)}
      >
        +10
      </button> 

      <button
      onClick={() => dispatch(actions.doReset())}
      >
        RESET
      </button> 
    </>
  )
}
