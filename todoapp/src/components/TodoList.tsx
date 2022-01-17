import React from "react";
import { TTodoItem } from "../types";
import { TodoItem } from "./TodoItem";

type Props = {
  items: TTodoItem[];
};

export const TodoList: React.VFC<Props> = (props: Props) => {
  const { items } = props;
  return (
    <ul className="todo-list">
      {items.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
