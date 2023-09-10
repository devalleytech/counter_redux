
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
      const count = useSelector(state => state);
      const dispatch = useDispatch();
    return <>
       <button onClick={(e)=> dispatch({type: "INCREMENT"})}>Increment</button>
         {count}
        <button onClick={(e)=> dispatch({type: "DECREMENT"})}>Decrement</button>
    </>
}

export default Counter;