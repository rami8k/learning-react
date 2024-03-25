import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { decrement, incrementByAmount, incrementAsync } from '../state/counter/counterSlice'

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    return (<div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Increment</button>
    </div>)
}

export default Counter