import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button type="button" onClick={() => dispatch({ type: 'ADD BY', payload: 5 })}>Add By 5</button>
    </div>
  );
}

export default App;
