import React from "react";
import { TTodoItem } from "../types";

type Props = {
  item: TTodoItem;
};

export const TodoItem: React.VFC<Props> = (props: Props) => {
  const { item } = props;
  return (
    <li>
      <label>
        <input type="checkbox" checked={item.done} />
        {item.name}
      </label>
    </li>
  );
};
