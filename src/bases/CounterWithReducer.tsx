import { useReducer } from "react"

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  counter:  number;
  previous: number; 
  changes:  number;
}

const INITIAL_STATE:CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

type CounterAction = 
  | { type: 'increaseBy', payload: { value: number} }
  | { type: 'reset' }


const counterReducer = (state:CounterState, action:CounterAction):CounterState => {

  const { changes, counter, previous } = state;

  switch (action.type) {
    case 'reset':
    
      if (
        previous === 0  
        && counter === 0
        && changes === 0) return state;

      return {
        changes: 0,
        counter: 0,
        previous: 0
      }

    case 'increaseBy':
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter,
      }
  
    default:
      return state;
  }
}

export const CounterWithReducer = ({initialValue = 0}: CounterProps) => {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)  

  const increaseBy = (value: number) => {
    dispatch({type: 'increaseBy', payload: {value}})
  }

  return (
    <>
      <h1>Counter Reducer:</h1>
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
      onClick={() => dispatch({type: 'reset'})}
      >
        RESET
      </button> 
    </>
  )
}
