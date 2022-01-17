import React, { useState } from "react";
import { NumberCounter } from "./NumberCounter";
import { TCounter } from "../types";
type Props = {
  defaultValues?: TCounter;
};

/**
 * Lift Up の例 
 * @param props 
 * @returns 
 */
export const CounterContainer: React.VFC<Props> = (props: Props) => {
  const { defaultValues } = props;
  const [count, setCount] = useState(defaultValues?.count || 0);
  return (
    <div className="counter-container">
      <h3>current number</h3>
      <p>{count}</p>
      <NumberCounter count={count} setCount={setCount} />
      <NumberCounter count={count} setCount={setCount} />
      <NumberCounter count={count} setCount={setCount} />
    </div>
  );
};
