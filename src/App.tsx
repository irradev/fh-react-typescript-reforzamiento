import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from './bases/CounterHook';
import { CounterWithReducer } from "./bases/CounterWithReducer";
import { CounterWithReducer as CounterSegmented } from "./counter-reducer/CounterWithReducer";

function App() {
  return (
    <>
    <h1>React</h1>
    <hr />

    <Counter initialValue={15} />
    <CounterBy />
    <CounterEffect />
    <CounterHook />
    <CounterWithReducer />
    <CounterSegmented />
    </>
  );
}

export default App;
