import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice"

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <span>{count}</span>
      <br />

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>

      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
        Add Amount
      </button>
      <button onClick={() => dispatch(incrementAsync(incrementValue))}>
        Add Async
      </button>
      <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
        Add If Odd
      </button>
    </div>
  )
}
