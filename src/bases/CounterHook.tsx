

import { useCounter } from '../hooks/useCounter';

interface CounterProps {
  initialValue?: number;
}

export const CounterHook = ({initialValue = 5}: CounterProps) => {

  const {counter, handleClick, $elementToAnimate } =  useCounter({initialValue, maxCount: 15})
  

  return (
    <>
      <h1>CounterHook: </h1>
      <h2 ref={$elementToAnimate}>{ counter }</h2>

      <button
      onClick={handleClick}
      >
       +1
      </button> 
    </>
  )
}
