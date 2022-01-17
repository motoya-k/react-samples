import React, {
  Dispatch,
  // useState
} from "react";
// import { TCounter } from "./types";

// type Props = {
//   defaultValues?: TCounter;
// };
type Props = {
  count: number;
  setCount: Dispatch<any>;
};

export const NumberCounter: React.VFC<Props> = (props: Props) => {
  //   const { defaultValues } = props;
  //   const [count, setCount] = useState(defaultValues?.count || 0);
  const { count, setCount } = props;
  return (
    <div className="number-counter">
      <h3>counter</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>count up!</button>
    </div>
  );
};
