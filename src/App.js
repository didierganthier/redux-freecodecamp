import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={() => dispatch(actions.increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(actions.decrement())}>Decrement</button>
      <button type="button" onClick={() => dispatch(actions.addBy(10))}>Add By</button>
    </div>
  );
}

export default App;
