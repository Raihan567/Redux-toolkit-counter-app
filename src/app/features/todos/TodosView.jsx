import React from "react";
import { useSelector } from "react-redux";
const TodosView = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <h1>Todo Application</h1>
    </div>
  );
};

export default TodosView;
