import { FC } from "react";
import { useCounter } from "../hooks";

export const Counter: FC = () => {
  const { count, increase, decrease } = useCounter();

  return (
    <div>
      <button onClick={increase}>+</button>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
    </div>
  );
};
