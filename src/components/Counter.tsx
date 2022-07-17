import { FC } from "react"
import { useCounter } from "../hooks"

export const Counter: FC = () => {
  const { count, increase, decrease } = useCounter()

  return (
    <div>
      <button aria-label="add" onClick={increase}>
        +
      </button>
      <p>{count}</p>
      <button aria-label="substract" onClick={decrease}>
        -
      </button>
    </div>
  )
}
