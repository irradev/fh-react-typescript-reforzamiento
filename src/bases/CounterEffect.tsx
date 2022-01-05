import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap';

interface CounterProps {
  initialValue?: number;
}

const MAXIMUN_COUNT = 10;

export const CounterEffect = ({initialValue = 5}: CounterProps) => {

  const [counter, setCounter] = useState(initialValue);
  const $counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    // setCounter(c => c + 1 > MAXIMUN_COUNT ? c : c + 1);
    // console.log(Math.min(counter + 1, MAXIMUN_COUNT));
    setCounter(c => Math.min(c + 1, MAXIMUN_COUNT));
  }

  useEffect(() => {
    if (counter < 10) return;

    console.log('%cSe llegó al valor máximo', `
      color: white;
      background-color: black;
      padding: 5px;
      border-radius: 5px
    `);

    const tl = gsap.timeline();

    tl.to($counterElement.current, {y:-10, duration: 0.2, ease: 'ease.out'})
      .to($counterElement.current, {y:0, duration: 1, ease: 'bounce.out'});
    
    // gsap.to($counterElement.current, {y:-10, duration: 0.2, ease: 'ease.out'}).then( () => {
    //   gsap.to($counterElement.current, {y:0, duration: 1, ease: 'bounce.out'})
    // });

  }, [counter])

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={$counterElement}>{ counter }</h2>

      <button
      onClick={handleClick}
      >
       +1
      </button> 
    </>
  )
}
