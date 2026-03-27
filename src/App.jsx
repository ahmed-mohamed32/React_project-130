import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, Reset } from './store/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
    
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    <button onClick={() => dispatch(Reset())}>Reset</button>
    <p>{count}</p>
    
    </>
  )
}

export default App
